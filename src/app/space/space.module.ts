import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpaceRoutingModule} from './space-routing.module';
import {HangarComponent} from './component/hangar/hangar.component';
import {SpaceShipComponent} from './component/space-ship/space-ship.component';
import {PilotComponent} from './component/pilot/pilot.component';
import {PilotRoomComponent} from './component/pilot-room/pilot-room.component';
import {EngineersRoomComponent} from './component/engineers-room/engineers-room.component';
import {SharedModule} from '../shared/shared.module';
import { DestructionRoomComponent } from './component/destruction-room/destruction-room.component';

@NgModule({
  imports: [
    CommonModule,
    SpaceRoutingModule,
    SharedModule
  ],
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
    EngineersRoomComponent,
    DestructionRoomComponent
  ],
  exports: []
})
export class SpaceModule {
}
