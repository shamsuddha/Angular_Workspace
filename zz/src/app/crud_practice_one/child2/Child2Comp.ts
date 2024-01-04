import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'Child2Comp',
  template: `child2 works
  <button (click)="click1()">inc2</button>
  <button (click)="emit()">emit</button>
  {{childVal2}}
  `
})
export class Child2Comp {

  @Input() childVal2: number = 201;

  @Output() child2Emitter = new EventEmitter<string>();

  click1() {
    this.childVal2 = this.childVal2 + 1;
  }

  emit() {
    this.child2Emitter.emit("from child 2")
  }

}
