
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


  deleteStudent(v:any){

    this.httpClient.delete('http://localhost:3000/student/'+v.id).subscribe();
    console.log("successfully Deleted...");
    
  }


  updateStudent(v: any) {
    console.log(v);
    this.httpClient.patch('http://localhost:3000/student/'+v.id, v  ).subscribe();
    console.log("successfully Updated...");
  }
}



