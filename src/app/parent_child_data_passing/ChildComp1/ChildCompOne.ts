import { Component, Input } from "@angular/core";

@Component({
  selector: 'ChildCompOne',
  templateUrl:'./ChildCompOne.html'
})

export class ChildCompOne{
  @Input() childData: string;
  @Output() childEvent = new EventEmitter<string>();


}