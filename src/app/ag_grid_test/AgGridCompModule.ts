
import { NgModule } from '@angular/core';
import { AgGridComp } from './AgGridComp';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AgGridComp,

  ],
  imports: [
    CommonModule,
    AgGridModule,
  ],
  exports: [
    AgGridComp,
  ],
  providers: [],

})

export class AgGridCompModule {

}
