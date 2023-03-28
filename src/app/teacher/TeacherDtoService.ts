
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherDto } from "./TeacherDto";

@Injectable({
  providedIn: 'root'
})
export class TeacherDtoService {

  constructor(private httpClient: HttpClient) { }

  getTeacherList(): Observable<Array<TeacherDto>> {
    return this.httpClient.get<Array<TeacherDto>>("http://localhost:3000/teacher");
  }

  saveTeacher(teacherDto: TeacherDto): Observable<TeacherDto> {
    return this.httpClient.post<TeacherDto>("http://localhost:3000/teacher", TeacherDto);
  }


  deleteTeacher(v:any){

    this.httpClient.delete('http://localhost:3000/teacher/'+v.id).subscribe();
    console.log("successfully Deleted...");
    
  }


  updateTeacher(v: any) {
    console.log(v);
    this.httpClient.patch('http://localhost:3000/teacher/'+v.id, v  ).subscribe();
    console.log("successfully Updated...");
  }
}



