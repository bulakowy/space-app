import {Directive, HostBinding, HostListener} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
  selector: 'img'
})
export class SpaceImageDirective {

  constructor(private sanitizer: DomSanitizer) {
  }

  zoom = 1.0;
  rotate = 1.0;


  @HostBinding('style.transform') get sscale() {
    return this.sanitizer.bypassSecurityTrustStyle(`rotate(${this.rotate}deg) scale(${this.zoom})`);
  }

  @HostListener('mousemove') zoomIn() {
    this.zoom += 0.01;
    this.rotate += 2;
  }

  @HostListener('mouseout') reset() {
    // this.zoom = 1.0;
  }
}
