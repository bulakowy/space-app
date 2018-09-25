import {Component, OnInit, ViewChild} from '@angular/core';
import {SpaceShip} from '../../model/space-ship';
import {Pilot} from '../../model/pilot';
import {PilotRoomComponent} from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];

  selectedPilot: Pilot;

  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;

  constructor() {
  }

  ngOnInit() {
  }

  pilotShip(ship: SpaceShip) {
    ship.pilot = this.selectedPilot;
    this.pilotRoom.leavePilotRoom();
  }

  leaveShip(ship: SpaceShip) {
    this.pilotRoom.addPilot(ship.pilot);
    ship.pilot = null;
  }

  addShip(ship: SpaceShip) {
    this.spaceShips.push(ship);
  }
}

