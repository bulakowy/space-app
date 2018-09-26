import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Pilot} from '../model/pilot';
import {Observable} from 'rxjs';
import {PilotService} from '../service/pilot.service';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PilotResolver implements Resolve<Pilot> {

  constructor(private pilotService: PilotService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pilot> | Promise<Pilot> | Pilot {
    const id = route.paramMap.get('id');
    if (id === 'new') {
      return this.pilotService.getPilots().pipe(
        map((pilots) => {
          console.log('XXX', pilots.length);
          return new Pilot({id: pilots.length + 1});
        })
      );
    } else {
      return this.pilotService.getPilot(+id);
    }
  }

}
