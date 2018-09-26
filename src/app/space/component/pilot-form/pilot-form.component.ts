import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {PilotService} from '../../service/pilot.service';
import {PilotAttrs} from '../../model/pilot-attrs';
import {PilotValidators} from '../../validator/pilot-validators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private pilotService: PilotService) {
  }

  ngOnInit() {
    this.route.data.pipe(
      map((data) => new FormGroup({
        id: new FormControl(data.pilot.id),
        firstName: new FormControl(data.pilot.firstName, {validators: [Validators.required, PilotValidators.startsWithCapitalLetter]}),
        lastName: new FormControl(data.pilot.lastName, {
          validators: [Validators.required, PilotValidators.startsWithCapitalLetter],
          asyncValidators: [PilotValidators.forbiddenName]
        }),
        imageUrl: new FormControl(data.pilot.imageUrl)
      }, {updateOn: 'blur'}))
    ).subscribe((form) => this.form = form);
  }

  save() {
    const attrs = this.form.value as PilotAttrs;
    this.pilotService.savePilot(attrs).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: () => alert('Nie udalo sie zapisac')
    });
  }

}
