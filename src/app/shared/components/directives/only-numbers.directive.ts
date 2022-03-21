import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[OnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initalValue = this.element.nativeElement.value;
    this.element.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.element.nativeElement.value) event.stopPropagation();
  }
}
