import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  form: FormGroup;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.pipe(
      map((data) => new FormGroup({
        id: new FormControl(data.pilot.id),
        firstName: new FormControl(data.pilot.firstName),
        lastName: new FormControl(data.pilot.lastName),
        imageUrl: new FormControl(data.pilot.imageUrl)
      }))
    ).subscribe((form) => this.form = form);
  }

  onSubmit() {

  }

}
