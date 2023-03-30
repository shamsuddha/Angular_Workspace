import { TeacherComp } from './teacher/TeacherComp';
import { BookComp } from './book/BookComp';

import { NgModule, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { StudentComp } from './student/StudentComp';
import { PersonComp } from './person/PersonComp';
import {NgSelectModule} from "@ng-select/ng-select";
import {RxjsExampleComp} from "./rxjs_example/RxjsExampleComp";


@NgModule({
  declarations: [
    AppComponent,
    StudentComp,
    ProfileEditorComponent,
    BookComp,
    PersonComp,
    TeacherComp

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    RxjsExampleComp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
