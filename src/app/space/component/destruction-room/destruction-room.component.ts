import {Component, OnInit} from '@angular/core';
import {SpaceShipService} from '../../service/space-ship.service';
import {DestructionFormValue} from '../../model/destruction-form-value';
import {Router} from '@angular/router';

@Component({
  selector: 'app-destruction-room',
  templateUrl: './destruction-room.component.html',
  styleUrls: ['./destruction-room.component.css']
})
export class DestructionRoomComponent implements OnInit {

  spaceShips = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(destructionFormValue: DestructionFormValue) {
    this.spaceShipService.removeShip(destructionFormValue);
    if (this.spaceShipService.hangarShips.getValue().length === 0) {
      this.router.navigateByUrl('/');
    }
  }
}
