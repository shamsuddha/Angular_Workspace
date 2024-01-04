import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[formControlName][myMask]',
  standalone: true
})
export class DateMaskDirective {

  constructor(public ngControl: NgControl, private elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  onClick1(targetElement: HTMLElement):void {
    console.log(targetElement)
    const t =this.elementRef.nativeElement.contains(targetElement);
    console.log(t)
  }



  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event: any) {
    this.onInputChange(event.target.value, true);
  }

  /*@HostListener('ngModelChange', ['$event'])
  ngModelChange(value: any) {
    this.ngControl.valueAccessor?.writeValue(value.toUpperCase());
  }*/

  ngOnInit() {
    /*const initialOnChange = (this.ngControl.valueAccessor as any).onChange;
    (this.ngControl.valueAccessor as any).onChange = (value:any) => initialOnChange(
      this.onInputChange(value,false));*/
    (this.ngControl.valueAccessor as any).onChange((v:any) => this.onInputChange(v,false))
  }

  onInputChange(event: any, backspace: boolean) {
    console.log(event)
    if (event === null || event === undefined || event === '') {
    } else if (typeof event === 'string') {
      /*let newVal = event.replace(/\D/g, '');
      if (backspace && newVal.length <= 6) {
        newVal = newVal.substring(0, newVal.length - 1);
      }
      if (newVal.length === 0) {
        newVal = '';
      } else if (newVal.length <= 2) {
        newVal = newVal.replace(/^(\d{0,2})/, '$1/');
      } else if (newVal.length <= 4) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
      } else if (newVal.length <= 8) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
      } else {
        newVal = newVal.substring(0, 8);
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
      }*/
      this.ngControl?.valueAccessor?.writeValue(event.toUpperCase());
    }
  }


}
