import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HangarComponent} from './component/hangar/hangar.component';
import {EngineersRoomComponent} from './component/engineers-room/engineers-room.component';
import {DestructionFormValue} from './model/destruction-form-value';
import {DestructionRoomComponent} from './component/destruction-room/destruction-room.component';
import {DestructionGuard} from './destruction.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule {
}
