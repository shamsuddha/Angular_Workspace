import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {toFaGfn} from "../../util/FormUtil";
import {RxFormBuilder, RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {EmployeeController} from "../../controller/EmployeeController";
import {Employee} from "../../entity/Employee";
import {Observable} from "rxjs";
import {Role} from "../../entity/Role";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'LoginComp',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    NgSelectModule, FormsModule, RxReactiveFormsModule,
    ReactiveFormsModule,],
  template: `
    <form [formGroup]="employeeFg">
      {{employeeFg.value | json}}<hr/>
      Name: <input formControlName="name"/>
      Role: <ng-select [items]="roleList$ | async" bindLabel="name" formControlName="roleTemp">
      </ng-select>
      <button type="button" (click)="save()" class="btn btn-outline-primary">Save</button>
      <button type="button" (click)="update()" class="btn btn-outline-primary">update</button>
    </form>`

})
export class LoginComp {

  employeeFg: FormGroup = this.rxFormBuilder.formGroup(Employee);
  toFaGfn = toFaGfn;
  roleList$: Observable<Array<Role>> = new Observable((e) => {
    e.next([new Role({id: 1, name: 'role 1'}), new Role({id: 2, name: 'role 2'})]);
  });

  constructor(
    public employeeController: EmployeeController,
    public rxFormBuilder: RxFormBuilder,
    private http: HttpClient) {
  }

  save() {
    console.log(this.employeeFg.value)
  }
  update() {
    this.employeeFg.patchValue(new Employee({id:45,name:'Emp 45', roleTemp: new Role({id: 2, name: 'role 2'})}))
  }


}
