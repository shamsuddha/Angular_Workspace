import {NgModule} from "@angular/core";
import {AgGridComp} from "../ag_grid_test/AgGridComp";
import {CommonModule} from "@angular/common";
import {AgGridModule} from "ag-grid-angular";
import {CrudPracticeOneComp} from "./CrudPracticeOneComp";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {Child1Comp} from "./child1/Child1Comp";
import {Child2Comp} from "./child2/Child2Comp";
import {CellComp} from "./CellComp";

@NgModule({
  declarations: [
    CrudPracticeOneComp,
    CellComp,
    Child1Comp,
    Child2Comp
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
