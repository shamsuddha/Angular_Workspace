import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'CellComp',
  template: `
    <span>
     <button *ngIf="params['updateFlag'] === true" (click)="update()"
             class="btn btn-primary">Update</button>
     <button *ngIf="params['deleteFlag'] === true" (click)="delete()"
             class="btn btn-danger">Delete</button>
     <button *ngIf="params['viewFlag'] === true" (click)="view()"
             class="btn btn-success">View</button>
    </span>
  `
})
export class CellComp implements ICellRendererAngularComp {

  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  update() {
    this.params.update(this.params);
  }

  delete() {
    this.params.delete(this.params);
  }

  view() {
    this.params.view(this.params);
  }

  refresh(params: any): boolean {
    return false;
  }
}
