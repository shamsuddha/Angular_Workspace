import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'Child3Comp',
  template: `
  <h1>child 3</h1>
  <button (click)="childComp3clicked()">click child 3</button> 
  <button (click)="emit()">emit3</button>
  <button  (click)="emit4()"></button>
  
  `
})
export class Child3Comp{

  @Output() child3Emmiter = new EventEmitter<string>();
  @Output() child4Emmiter = new EventEmitter<number>();


childComp3clicked() {

  console.log("child 3 button was clicked");
}

emit()
{
  this.child4Emmiter.emit(213123123);
}

emit4()
{
  this.child3Emmiter.emit('213123123');
}


}