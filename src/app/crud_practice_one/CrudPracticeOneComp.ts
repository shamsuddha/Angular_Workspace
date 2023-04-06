import { HorseDto } from './HorseDto';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentDtoService } from './../student/StudentDtoService';
import { Component } from "@angular/core";
import { CrudPracticeOneDtoService } from './CrudPracticeOneDtoService';

@Component({
  selector: 'CrudPracticeOneComp',
  templateUrl: './CrudPracticeOneComp.html',
  styleUrls: ['./CrudPracticeOneComp.scss']
})
export class CrudPracticeOneComp {


  divisionList: Array<{ id: number, name: string }> = [
    { id: 1, name: 'Division 1' },
    { id: 2, name: 'Division 2' },
    { id: 3, name: 'Division 3' },
    { id: 4, name: 'Division 4' },
  ];
  districtWithDivisionList = [
    { id: 1, name: 'district 11', divisionId: 1 },
    { id: 2, name: 'district 12', divisionId: 1 },
    { id: 3, name: 'district 13', divisionId: 1 },
    { id: 4, name: 'district 21', divisionId: 2 },
    { id: 5, name: 'district 22', divisionId: 2 },
  ];
  districtList: Array<{ id: number, name: string }> = [];
  thanaList = [
    { id: 1, name: 'Tangail Sadar' },
    { id: 2, name: 'Chittagong Sadar' },
    { id: 3, name: 'Dhaka sadar' },
    { id: 4, name: 'Sylhet Sadar' },
  ];
  crudPracticeOneFg = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null),
    divisionId: new FormControl<number | null>(null),
    divisionName: new FormControl<string | null>(null),
    districtId: new FormControl<number | null>(null),
    districtName: new FormControl<string | null>(null),
    thanaId: new FormControl<number | null>(null),
    thanaName: new FormControl<string | null>(null),
    gender: new FormControl<string | null>(null)
  })
  crudPracticeOneDtoList: Array<HorseDto> = [];

  constructor(private crudPracticeOneDtoService: CrudPracticeOneDtoService) { }

  ngOnInit() {
    this.search();
  }

  save() {
    console.log(this.crudPracticeOneFg.value);
    this.crudPracticeOneDtoService.saveCrudPracticeOne(new HorseDto(this.crudPracticeOneFg.value))
      .subscribe((e) => {
        this.search();
      });
  }

  loadData() {
    const crudPracticeOneDto: HorseDto = new HorseDto({ id: 5, name: "CrudPracticeOne 5" });
    this.crudPracticeOneFg.patchValue(crudPracticeOneDto);
  }

  reset() {
    this.crudPracticeOneFg.reset();
  }

  log() {
    console.log(this.crudPracticeOneFg.errors)
    console.log(this.crudPracticeOneFg.valid)
  }

  markAllTouched() {
    this.crudPracticeOneFg.markAllAsTouched();
  }

  search() {
    this.crudPracticeOneDtoService.getCrudPracticeOneList().subscribe((e: Array<HorseDto>) => {
      this.crudPracticeOneDtoList = e;
    })
  }

  delete(crudPracticeOneDto: HorseDto) {
    this.crudPracticeOneDtoService.deleteCrudPracticeOne(crudPracticeOneDto);
    this.search();
  }

  onUpdateClick(crudPracticeOneDto: HorseDto) {
    this.crudPracticeOneFg.patchValue({
      divisionId: crudPracticeOneDto.divisionId,
      districtId: crudPracticeOneDto.districtId,
      thanaId: crudPracticeOneDto.thanaId,
      id: crudPracticeOneDto.id,
      name: crudPracticeOneDto.name,
      address: crudPracticeOneDto.address,
      gender: crudPracticeOneDto.gender
    });
    //this.search();
  }

  update() {
    this.crudPracticeOneDtoService.updateCrudPracticeOne(new HorseDto(this.crudPracticeOneFg.value))
      .subscribe(e => {
        console.log(e);
        this.search();
      })
  }

  onSelectDivision($event: { id: number, name: string }) {
    this.crudPracticeOneFg.patchValue({
      divisionName: $event.name
    });
  }

  
}

