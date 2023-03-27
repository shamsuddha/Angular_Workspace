
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDto } from "./StudentDto";

@Injectable({
  providedIn: 'root'
})
export class StudentDtoService {

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Array<StudentDto>> {
    return this.httpClient.get<Array<StudentDto>>("http://localhost:3000/student");
  }

  saveStudent(studentDto: StudentDto): Observable<StudentDto> {
    return this.httpClient.post<StudentDto>("http://localhost:3000/student", studentDto);
  }

}
