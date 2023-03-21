import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "localhost url"

  constructor(private httpClient:HttpClient) { }


  getEmployeeList(): Observable<Employee[]>
  { 
    return this.httpClient.get<Employee[]>(`$(this.baseURL)`);
  }
}
