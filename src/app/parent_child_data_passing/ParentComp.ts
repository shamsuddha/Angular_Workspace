import { Component } from "@angular/core";


@Component({
  selector: "ParentComp",
  templateUrl: "./ParentComp.html"
})

export class ParentComp
{
  parentData = "Data from parent";
  childMessage = "";

  onChildEvent(message: string) {
    this.childMessage = message;
  }

}