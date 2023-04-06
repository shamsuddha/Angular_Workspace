import { TeacherComp } from './teacher/TeacherComp';
import { BookComp } from './book/BookComp'; 
import { NgModule, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentComp } from './student/StudentComp';
import { PersonComp } from './person/PersonComp';
import {NgSelectModule} from "@ng-select/ng-select";
import {RxjsExampleComp} from "./rxjs_example/RxjsExampleComp";
import { AgGridCompModule } from './ag_grid_test/AgGridCompModule';
import { CrudPracticeOneComp } from './crud_practice_one/CrudPracticeOneComp';



@NgModule({
  declarations: [
    AppComponent,
    StudentComp,
 
    BookComp,
    PersonComp,
    TeacherComp,
    CrudPracticeOneComp
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    RxjsExampleComp,
    AgGridCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
