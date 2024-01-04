import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'ButtonCellRendererComp',
  imports: [],
  template: `
    <button class="{{params.colDef?.cellRendererParams['buttonClass']}}"
            (click)="params.colDef?.cellRendererParams['buttonOnClick'](params)">
      {{params.colDef?.cellRendererParams['buttonLabel']}}</button>`,
  styles: `
  .btn-font-red{
    color:red
  }
  .btn-font-blue{
    color:blue
  }`,
  standalone: true,
})
export class ButtonCellRendererComp implements ICellRendererAngularComp {

  params!: ICellRendererParams<any, any, any>;
  cellRendererParams?: any;

  agInit(params: ICellRendererParams<any, any, any>) {
    this.params = params;
    this.cellRendererParams = params.colDef?.cellRendererParams;
  }

  /*refresh(params: ICellRendererParams) {
    this.params = params;
    return true;
  }*/

  refresh(params: ICellRendererParams<any>) {
    return false;
  }

  /*fn(params: ICellRendererParams<any, any, any>) {
    console.log(params.data)
  }*/
}
