import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HangarComponent} from './component/hangar/hangar.component';
import {EngineersRoomComponent} from './component/engineers-room/engineers-room.component';
import {DestructionRoomComponent} from './component/destruction-room/destruction-room.component';
import {DestructionGuard} from './destruction.guard';
import {PilotFormComponent} from './component/pilot-form/pilot-form.component';
import {PilotResolver} from './resolver/pilot.resolver';

const routes: Routes = [
  {
    path: '',
    component: HangarComponent,
    children: [
      {path: 'production', component: EngineersRoomComponent},
      {
        path: 'destruction',
        canActivate: [DestructionGuard],
        component: DestructionRoomComponent
      },
      {path: '', redirectTo: 'production', pathMatch: 'full'}
    ]
  },
  {
    path: 'pilots/:id',
    component: PilotFormComponent,
    resolve: {pilot: PilotResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule {
}
