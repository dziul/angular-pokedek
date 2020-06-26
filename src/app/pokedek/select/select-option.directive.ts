import { FocusableOption, Highlightable } from '@angular/cdk/a11y';
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[keyboardNavigableItem]',
})
export class SelectOptionDirective implements FocusableOption {
  @Input('keyboardNavigableItem') value: string;

  constructor(private hostElement: ElementRef) {}

  focus() {
    this.hostElement.nativeElement.focus();
  }
}
