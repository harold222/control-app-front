import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[OnlyLetters]'
})
export class OnlyLettersDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initalValue = this.element.nativeElement.value;
    this.element.nativeElement.value = initalValue.replace(/[^a-zA-Z\s]*/g, '');
    if ( initalValue !== this.element.nativeElement.value) event.stopPropagation();
  }
}
