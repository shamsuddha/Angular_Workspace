import {Component, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {RxFormBuilder, RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {Observable, of} from "rxjs";
import {CellClickedEvent, ColDef, GridReadyEvent} from 'ag-grid-community';
import {AgGridAngular, AgGridModule} from "ag-grid-angular";
import {ButtonCellRendererComp} from "./button_cell_renderer/ButtonCellRendererComp";

@Component({
  selector: 'DataGridComp',
  standalone: true,
  imports: [CommonModule,
    NgSelectModule, ReactiveFormsModule, FormsModule, RxReactiveFormsModule,
    AgGridModule, ButtonCellRendererComp],
  templateUrl: './DataGridComp.html',
  styleUrl: './DataGridComp.scss'
})
export class DataGridComp {

  @Input() colDefList: Array<ColDef> = [];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  @Input() dataList$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    public rxFormBuilder: RxFormBuilder) {
  }

  onGridReady(params: GridReadyEvent) {
    //console.log("calling")
  }

  onCellClicked(e: CellClickedEvent): void {
    //console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}
