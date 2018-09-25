import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderFormValue} from '../../model/order-form-value';
import {SpaceShipType} from '../../model/space-ship-type.enum';
import {SpaceShip} from '../../model/space-ship';
import {SpaceShipService} from '../../service/space-ship.service';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  private productionInProgress = false;

  @Output() shipProduced = new EventEmitter<SpaceShip>();

  spaceShipTypes = [
    {label: 'Bombowiec', value: SpaceShipType.Bomber},
    {label: 'Myśliwiec', value: SpaceShipType.Fighter}
  ];

  constructor(private spaceShipService: SpaceShipService) {
  }

  ngOnInit() {
  }

  onSubmit(orderFormValue: OrderFormValue) {
    console.log(orderFormValue);
    this.startProduction();
    this.spaceShipService.produceShips(orderFormValue)
      .subscribe({
        next: (s) => this.shipProduced.emit(s),
        complete: () => this.finishProduction()
      });
  }

  private startProduction() {
    this.productionInProgress = true;
  }

  private finishProduction() {
    this.productionInProgress = false;
  }

  isProductionInProgress() {
    return this.productionInProgress;
  }
}
