import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpaceImageDirective} from './space-image.directive';
import { TickizePipe } from './tickize.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpaceImageDirective,
    TickizePipe
  ],
  exports: [
    FormsModule,
    SpaceImageDirective,
    TickizePipe,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
