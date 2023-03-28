import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentDto } from './StudentDto';
import { StudentDtoService } from './StudentDtoService';

@Component({
  selector: 'StudentComp',
  templateUrl: './StudentComp.html',
  styleUrls: ['./StudentComp.scss']
})
export class StudentComp {

  constructor(private studentDtoService: StudentDtoService) { }

  studentDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(3)]),
  });

  studentDtoList: Array<StudentDto> = [];

  save() {
    console.log(this.studentDtoFg.value);
    this.studentDtoService.saveStudent(new StudentDto(this.studentDtoFg.value)).subscribe(e => e);
  }

  loadData() {
    const studentDto: StudentDto = new StudentDto({ id: 5, name: "student 5" });
    this.studentDtoFg.patchValue(studentDto);
  }

  reset() {
    this.studentDtoFg.reset();
  }

  log() {
    console.log(this.studentDtoFg.errors)
    console.log(this.studentDtoFg.valid)
  }

  markAllTouched() {
    this.studentDtoFg.markAllAsTouched();
  }

  loadAllData() {
    this.studentDtoService.getStudentList().subscribe((e: Array<StudentDto>) => {
      this.studentDtoList = e;
    })
  }

  delete(v: any) {
    console.log("deleting", v);
  }

  update(v: any) {
    console.log("updating", v);
  }

};