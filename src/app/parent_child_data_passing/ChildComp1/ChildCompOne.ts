import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ChildCompOne',
  templateUrl: './ChildCompOne.html',
})
export class ChildCompOne {
  
  @Input() childData: string;
  @Output() childEvent = new EventEmitter<string>();

  emitEvent() {
    this.childEvent.emit('Event from child');
  }
}
