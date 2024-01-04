import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CrudPracticeOneComp} from "./CrudPracticeOneComp";
import {NgSelectModule} from "@ng-select/ng-select";
import {ReactiveFormsModule} from "@angular/forms";
import {Child1Comp} from "./child1/Child1Comp";
import {Child2Comp} from "./child2/Child2Comp";
import {CellComp} from "./CellComp";
import { Child3Comp } from "./child3/Child3Comp";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  declarations: [
    CrudPracticeOneComp,
    CellComp,
    Child1Comp,
    Child2Comp,
    Child3Comp
   
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  exports: [
    CrudPracticeOneComp,
  ],
  providers: [],
})
export class CrudPracticeOneCompModule {
}
