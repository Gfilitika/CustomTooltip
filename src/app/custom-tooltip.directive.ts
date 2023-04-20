import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }

  //Element.getBoundingClientRect();

}
