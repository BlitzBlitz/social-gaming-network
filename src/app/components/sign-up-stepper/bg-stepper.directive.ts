import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[bgStepper]'
})
export class BgStepperDirective {
  colors =['#f1f1f1', '#a34f21', '#773277']
  @Input()
  currentStep = 0;
  @HostBinding('style.backgroundColor')
  backgroundColor = this.colors[this.currentStep] ;

  constructor() { }
}
