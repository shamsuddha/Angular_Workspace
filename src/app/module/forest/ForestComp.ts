import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {of} from "rxjs";
import {ColDef} from "ag-grid-community";
import {ButtonCellRendererComp} from "../../widget/data_grid/button_cell_renderer/ButtonCellRendererComp";
import {DataGridComp} from "../../widget/data_grid/DataGridComp";

@Component({
  selector: 'ForestComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DataGridComp],
  templateUrl: './ForestComp.html',
  styleUrl: './ForestComp.scss'
})
export class ForestComp {

  title = 'ForestComp';

  studentList$ = of([
    {"id": "1", "name": "student 1", "age": 72},
    {"id": "2", "name": "student 2", "age": 32},
    {"id": "3", "name": "student 3", "age": 32},
    {"id": "4", "name": "student 4", "age": 35},
    {"id": "5", "name": "student 5", "age": 35},
    {"id": "6", "name": "student 6", "age": 72},
    {"id": "7", "name": "student 7", "age": 72},
    {"id": "8", "name": "student 8", "age": 72},
    {"id": "9", "name": "student 9", "age": 72},
    {"id": "10", "name": "student 10", "age": 72},
    {"id": "11", "name": "student 11", "age": 72},
    {"id": "12", "name": "student 12", "age": 72},
  ]);

  colDefList: ColDef[] = [
    {field: 'id'},
    {field: 'name'},
    {field: 'age'},
    {
      headerName: '', editable: false, colId: 'action', width: 155,
      cellRenderer: ButtonCellRendererComp, pinned: 'left',
      cellStyle: {color: 'black', 'padding-left': '0px', 'padding-right': '0px'},
      cellRendererParams: {
        buttonLabel: 'Detail',
        buttonClass: 'btn btn-success mx-0 px-1 btn-font-blue',
        buttonOnClick: (param: any) => {
          this.viewDetail(param.data);
        }
      }
    },
  ];

  viewDetail(data: any) {
    console.log('btn click', data)
  }

}
