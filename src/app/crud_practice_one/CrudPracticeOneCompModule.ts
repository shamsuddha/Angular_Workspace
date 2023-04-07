import { NgModule } from "@angular/core";
import { AgGridComp } from "../ag_grid_test/AgGridComp";
import { CommonModule } from "@angular/common";
import { AgGridModule } from "ag-grid-angular";
import { CrudPracticeOneComp } from "./CrudPracticeOneComp";
import { NgSelectModule } from "@ng-select/ng-select";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CrudPracticeOneComp,

  ],
  imports: [
    CommonModule,
    AgGridModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    CrudPracticeOneComp,
  ],
  providers: [],

})
export class CrudPracticeOneCompModule {

}
