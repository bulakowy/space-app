import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HangarComponent} from './component/hangar/hangar.component';

const routes: Routes = [
  {path: '', component: HangarComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule {
}
