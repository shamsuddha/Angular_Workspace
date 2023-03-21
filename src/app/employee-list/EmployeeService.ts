
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeeDto} from "./EmployeeDto";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private httpClient:HttpClient) { }


  getEmployeeList(): Observable<Array<EmployeeDto>>{
    return this.httpClient.get<Array<EmployeeDto>>("http://localhost:3000/employee");
  }
}
