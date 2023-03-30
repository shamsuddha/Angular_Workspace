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

  carList = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor(private teacherDtoService: TeacherDtoService) {
  }

  teacherDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null, [Validators.required,
    Validators.maxLength(30), Validators.minLength(3)]),
    carId: new FormControl<number | null>(null),
  });

  teacherDtoList: Array<TeacherDto> = [];

  save() {
    console.log(this.teacherDtoFg.value);
    this.teacherDtoService.saveTeacher(new TeacherDto(this.teacherDtoFg.value))
      .subscribe((e) => {
        this.search();
      });
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

  search() {
    this.teacherDtoService.getTeacherList().subscribe((e: Array<TeacherDto>) => {
      this.teacherDtoList = e;
    })
  }

  delete(teacherDto: TeacherDto) {
    this.teacherDtoService.deleteTeacher(teacherDto);
    this.search();
  }

  onUpdateClick(teacherDto: TeacherDto) {
    this.teacherDtoFg.patchValue({
      carId: teacherDto.carId,
      id: teacherDto.id,
      name: teacherDto.name
    });
    //this.search();
  }

  update() {
    this.teacherDtoService.updateTeacher(new TeacherDto(this.teacherDtoFg.value))
    .subscribe(e=> {
      console.log(e);
      this.search();
    })
  }

  ngOnInit()
  {
    this.search();
  }

}
