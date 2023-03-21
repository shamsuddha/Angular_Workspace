import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
employees: Employee[] | null = null;

ngOnInit() : void {
  this.employees = [{
   "id": 1,
   "firstName": "firstName1",
   "lastName": "lastName1",
   "email": "rajit@gmail.com1"
  },
  {
    "id": 2,
    "firstName": "firstName2",
    "lastName": "lastName2",
    "email": "rajit@gmail.com2"
  }

];
}

}
