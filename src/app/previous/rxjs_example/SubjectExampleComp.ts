import {Component} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'SubjectExampleComp',
  standalone: true,
  template: `
    <button (click)="emit1()">emit1</button>
    <button (click)="emit2()">emit2</button>
    <button (click)="observing()">observing</button>
  `,
})
export class SubjectExampleComp {

  subject: Subject<number> = new Subject<number>();

  constructor() {
  }

  observing() {
    console.log('observing')
    this.subject.subscribe(e=> console.log(e));
  }

  emit1() {
    console.log('emit1')
    this.subject.next(5);
  }

  emit2() {
    console.log('emit2')
    this.subject.next(10);
  }
}
