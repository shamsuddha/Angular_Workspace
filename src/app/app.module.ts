import {TeacherComp} from './teacher/TeacherComp';
import {BookComp} from './book/BookComp';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StudentComp} from './student/StudentComp';
import {PersonComp} from './person/PersonComp';
import {NgSelectModule} from "@ng-select/ng-select";
import {RxjsExampleComp} from "./rxjs_example/RxjsExampleComp";
import {CrudPracticeOneCompModule} from './crud_practice_one/CrudPracticeOneCompModule';
import {CollectionManipulateComp} from "./collection_manipulate/CollectionManipulateComp";

@NgModule({
  declarations: [
    AppComponent,
    StudentComp,
    BookComp,
    PersonComp,
    TeacherComp,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    RxjsExampleComp,
    CrudPracticeOneCompModule,
    CollectionManipulateComp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
