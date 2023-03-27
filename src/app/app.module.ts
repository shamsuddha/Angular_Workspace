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
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    StudentComp,
    ProfileEditorComponent,
    BookComp,
    PersonComp
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
