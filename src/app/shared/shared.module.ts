import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SpaceImageDirective} from './space-image.directive';
import { TickizePipe } from './tickize.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SpaceImageDirective,
    TickizePipe
  ],
  exports: [
    FormsModule,
    SpaceImageDirective,
    TickizePipe
  ]
})
export class SharedModule {
}
