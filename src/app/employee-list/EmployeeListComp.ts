import {Component} from '@angular/core';
import {EmployeeDto} from "./EmployeeDto";
import {HttpClient} from "@angular/common/http";
import {EmployeeService} from "./EmployeeService";

@Component({
  selector: 'EmployeeListComp',
  templateUrl: './EmployeeListComp.html',
  styleUrls: ['./EmployeeListComp.scss']
})
export class EmployeeListComp {

  employeeDtoList: Array<EmployeeDto> = [];
  employeeDto: EmployeeDto | null = null;
  officeName: string | null = null;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.officeName = 'Channel 52';
  }


  reload() {
    this.employeeService.getEmployeeList()
      .subscribe((e: Array<EmployeeDto>) => {
        this.employeeDtoList = e;
      })
  }
}
