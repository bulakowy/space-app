import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './component/hangar/hangar.component';
import { SpaceShipComponent } from './component/space-ship/space-ship.component';
import { PilotComponent } from './component/pilot/pilot.component';
import { PilotRoomComponent } from './component/pilot-room/pilot-room.component';
import { EngineersRoomComponent } from './component/engineers-room/engineers-room.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SpaceRoutingModule
  ],
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
    EngineersRoomComponent
  ],
  exports: [
    HangarComponent,
    PilotRoomComponent,
    EngineersRoomComponent
  ]
})
export class SpaceModule { }
