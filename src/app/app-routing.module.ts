import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpaceModule} from './space/space.module';
import {BlackHoleComponent} from './shared/black-hole/black-hole.component';

const routes: Routes = [
  {path: 'space', loadChildren: () => SpaceModule},
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
