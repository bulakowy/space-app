import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../model/space-ship';
import { FighterShip } from '../model/fighter-ship';
import { BomberShip } from '../model/bomber-ship';
import { Pilot } from '../model/pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('Alf')));
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new FighterShip(new Pilot('Alf')));
    this.spaceShips.push(new FighterShip(new Pilot('Alf')));
  }

}

