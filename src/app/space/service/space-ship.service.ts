import {Injectable} from '@angular/core';
import {OrderFormValue} from '../model/order-form-value';
import {interval, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {SpaceShip} from '../model/space-ship';
import {SpaceShipType} from '../model/space-ship-type.enum';
import {BomberShip} from '../model/bomber-ship';
import {FighterShip} from '../model/fighter-ship';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  shipBuildTime = 1000;

  constructor() {
  }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    return interval(this.shipBuildTime)
      .pipe(
        map((x) => this.newShip(formValues)),
        take(Number(formValues.shipCount))
      );
  }

  private newShip(formValues: OrderFormValue): SpaceShip {
    if (formValues.shipType === SpaceShipType.Bomber) {
      return new BomberShip();
    } else {
      return new FighterShip();
    }
  }

}

