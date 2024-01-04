import {Directive, HostListener, Output, EventEmitter} from '@angular/core';
import {NgControl, FormControl} from '@angular/forms';

@Directive({
  selector: '[myDirective]',
  standalone: true,
  host: {
    '(focus)' : 'onFocus($event)',
  }
})
export class Mydirective {

  constructor(private ngControl: NgControl) {
  }

  ngOnInit() {
    const initialOnChange = (this.ngControl.valueAccessor as any).onChange;
    (this.ngControl.valueAccessor as any).onChange = (value:any) => initialOnChange(this.processInput(value));
  }

  processInput(value: any) {
    return value.toUpperCase();
  }

  @HostListener('ngModelChange', ['$event'])
  ngModelChange(value: any) {
    this.ngControl.valueAccessor?.writeValue(this.processInput(value));
  }

 /* @HostListener('document:click', ['$event.target'])
  onDocumentClick(targetElement: HTMLElement):void {
    console.log(targetElement)
  }

  @HostListener('click', ['$event.target'])
  onClickEl(targetElement: HTMLElement):void {
    console.log(targetElement)
  }
  @HostListener('click', ['$event'])
  onClickEl2($event: any):void {
    console.log($event)
  }*/

  @HostListener('window:keydown.enter', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(event)
  }

  onFocus($event: FocusEvent) {
    console.log($event)
  }

  @HostListener('document:keydown.control.y', ['$event'])
  onKeyDown(e:any) {
    console.log('ctrl + y');
  }
  @HostListener('document:keydown.control.c', ['$event'])
  onKeyDownC(e:any) {
    e.preventDefault();
    console.log('ctrl + c');
  }
}
