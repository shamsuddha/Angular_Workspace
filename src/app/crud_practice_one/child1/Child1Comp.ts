import {Component, Input} from "@angular/core";

@Component({
  selector: 'Child1Comp',
  template: `child1 works
  <button (click)="click1()">inc1</button>
  {{childVal1}}
  `,
})
export class Child1Comp {

  @Input() childVal1: number = 101;

  click1() {
    this.childVal1 = this.childVal1 + 1;
  }
}
