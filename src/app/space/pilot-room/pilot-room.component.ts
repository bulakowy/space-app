import { Component, OnInit } from '@angular/core';
import { Pilot } from '../model/pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot;

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Kamil T', '/assets/alf.jpg'));
    this.pilots.push(new Pilot('Daniel S', '/assets/kermit.jpg'));
    const p = new Pilot('Adam B', '/assets/kermit.jpg');
    this.pilots.push(p);
    this.select(p);
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
  }

}
