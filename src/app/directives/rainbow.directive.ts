import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @Input('appRainbow') color: string = 'white'

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color
  }

  @HostListener('mouseover')
  handleMouseover() {
    this.el.nativeElement.style.transform = 'scale(1.05)'
  }

  @HostListener('mouseleave')
  handleMouseleave() {
    this.el.nativeElement.style.transform = 'scale(1)'
  }
}
