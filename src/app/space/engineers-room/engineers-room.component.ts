import {Component, OnInit} from '@angular/core';
import {OrderFormValue} from '../order-form-value';
import {SpaceShipType} from '../space-ship-type.enum';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  spaceShipTypes = [
    {label: 'Bombowiec', value: SpaceShipType.Bomber},
    {label: 'Myśliwiec', value: SpaceShipType.Fighter}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(orderFormValue: OrderFormValue) {
    console.log(orderFormValue);
  }

}
