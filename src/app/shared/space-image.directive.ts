import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'img'
})
export class SpaceImageDirective {

  zoom = 1.0;

  @HostBinding('style.transform') get scale() {
    return `rotate(${this.zoom}deg)`;
  }

  @HostListener('mousemove') zoomIn() {
    this.zoom *= 1.1;
  }

  @HostListener('mouseout') reset() {
    // this.zoom = 1.0;
  }
}
