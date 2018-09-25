import {Component, OnInit} from '@angular/core';
import {OrderFormValue} from '../../model/order-form-value';
import {SpaceShipType} from '../../model/space-ship-type.enum';
import {SpaceShipService} from '../../service/space-ship.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  private productionInProgress = false;

  // @Output() shipProduced = new EventEmitter<SpaceShip>();

  private shipCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

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
        next: (s) => console.log(s),
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
