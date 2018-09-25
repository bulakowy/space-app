import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Pilot} from '../../model/pilot';
import {PilotService} from '../../service/pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot;
  @Output() selectedPilotOutput = new EventEmitter();

  constructor(private pilotService: PilotService) {
  }

  ngOnInit() {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('Nie udało się pobrać pilotów')
    });
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
