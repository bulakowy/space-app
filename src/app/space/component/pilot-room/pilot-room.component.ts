import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pilot } from '../../model/pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot;
  @Output() selectedPilotOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Kamil T', '/assets/alf.jpg'));
    this.pilots.push(new Pilot('Daniel S', '/assets/kermit.jpg'));
    this.pilots.push(new Pilot('Adam B', '/assets/kulfon.jpg'));
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
    this.selectedPilotOutput.emit(pilot);
  }

  leavePilotRoom() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  addPilot(pilot: Pilot) {
    this.pilots.push(pilot);
  }

}
