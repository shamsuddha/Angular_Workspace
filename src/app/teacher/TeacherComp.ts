import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeacherDto } from './TeacherDto';
import { TeacherDtoService } from './TeacherDtoService';

@Component({
  selector: 'TeacherComp',
  templateUrl: './TeacherComp.html',
  styleUrls: ['./TeacherComp.scss']
})
export class TeacherComp {

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];
  
  constructor(private teacherDtoService: TeacherDtoService) { }

  teacherDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null, [Validators.required, Validators.maxLength(3)]),
    car: new FormControl<number | null>(null),
  });

  teacherDtoList: Array<TeacherDto> = [];

  save() {
    console.log(this.teacherDtoFg.value);
    this.teacherDtoService.saveTeacher(new TeacherDto(this.teacherDtoFg.value)).subscribe(e => e);
  }

  loadData() {
    const teacherDto: TeacherDto = new TeacherDto({ id: 5, name: "Teacher 5" });
    this.teacherDtoFg.patchValue(teacherDto);
  }

  reset() {
    this.teacherDtoFg.reset();
  }

  log() {
    console.log(this.teacherDtoFg.errors)
    console.log(this.teacherDtoFg.valid)
  }

  markAllTouched() {
    this.teacherDtoFg.markAllAsTouched();
  }

  loadAllData() {
    this.teacherDtoService.getTeacherList().subscribe((e: Array<TeacherDto>) => {
      this.teacherDtoList = e;
    })
  }

  delete(v: any) {
    console.log(v);
    this.teacherDtoService.deleteTeacher(v);
  }

  edit(v: any) {
    console.log(v);
    this.teacherDtoFg.controls.id.setValue(v.id);
    this.teacherDtoFg.controls.name.setValue(v.name);
  }

  update(v: any) {
    this.teacherDtoService.updateTeacher(v);
  }


};