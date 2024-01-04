import {Component, inject, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DateMaskDirective} from "../../widget/directive/DateMaskDirective";
import {Mydirective} from "../../widget/directive/Mydirective";

@Component({
  selector: 'RiverComp',
  standalone: true,
  imports: [CommonModule,FormsModule,
    ReactiveFormsModule,DateMaskDirective,Mydirective],
  template: `
    <button (click)="fn1()">search1</button>
    {{userFg.value | json}}
    <div [formGroup]="userFg">
      <input formControlName="id"/>
      <input formControlName="name" />
      <input formControlName="address" myDirective/>
    </div>

    <!--{{selected.value}}
    <input type="number" [formControl]="selected">
    <button (click)="selected.setValue(5)">add</button>-->
  `,
  styles: `

  `,
})
export class CrudComp implements OnInit {

  http = inject(HttpClient);
  selected = new FormControl(0);
  fb =  inject(FormBuilder);

  userFg = this.fb.group({
    id: [null],
    name: [null],
    address: [null],
  });


  constructor() {
  }

  ngOnInit(): void {
  }

  fn1() {
   /* this.http.get('https://dummyjson.com/products/1')
      .subscribe(e => {
        console.log(e)
      })*/
    this.http.post('https://example/login',
      {username:'user1',password:'password1'})
      .subscribe(e => {
        console.log(e)
      }, (e) => {
        console.log(e)
      })
  /*  return of([{id:1,name:'student 1'},{id:2,name:'student 2'}]).subscribe(e => {
      console.log(e)
    })*/
  }

}
