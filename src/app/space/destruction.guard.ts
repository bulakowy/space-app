import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SpaceShipService} from './service/space-ship.service';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard implements CanActivate {

  constructor(private spaceShipService: SpaceShipService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const shipsPresent = this.spaceShipService.hangarShips.getValue().length > 0;
    if (!shipsPresent) {
      alert('Nie ma statkow');
      this.router.navigateByUrl('/');
    } else {
      return true;
    }
  }
}
