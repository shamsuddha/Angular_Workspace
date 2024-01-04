import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { ReactiveFormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";
import { CellComp } from "./CellComp";


@NgModule({
  declarations: [
    CellComp
   
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    AgGridModule
    
  ],
  exports: [
   
  ],
  providers: [],
})
export class BookCompModule {
}
