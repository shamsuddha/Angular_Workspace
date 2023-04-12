import {TeacherComp} from './teacher/TeacherComp';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentComp} from './student/StudentComp';
import {NgSelectModule} from "@ng-select/ng-select";
import {RxjsExampleComp} from "./rxjs_example/RxjsExampleComp";
import {CrudPracticeOneCompModule} from './crud_practice_one/CrudPracticeOneCompModule';
import {CollectionManipulateComp} from "./collection_manipulate/CollectionManipulateComp";
import { BookComp } from './book/BookComp';
import { UserComp } from './user/UserComp';
import { BookCompModule } from './book/BookCompModule';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComp } from './parent_child_data_passing/ParentComp';

@NgModule({
  declarations: [
    AppComponent,
    StudentComp,
    TeacherComp,
    BookComp,
    UserComp,
    ParentComp
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    RxjsExampleComp,
    CrudPracticeOneCompModule,
    CollectionManipulateComp,
    BookCompModule,
    AgGridModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
