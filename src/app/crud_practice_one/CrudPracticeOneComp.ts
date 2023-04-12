import { HorseDto } from './HorseDto';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from "@angular/core";
import { CrudPracticeOneDtoService } from './CrudPracticeOneDtoService';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { CellComp } from "./CellComp";

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
  thanaWithDistrictList = [
    { id: 1, name: 'thana 11', districtId: 11 },
    { id: 2, name: 'thana 22', districtId: 11 },
    { id: 3, name: 'thana 33', districtId: 12 },
    { id: 3, name: 'thana 44', districtId: 13 },
    { id: 4, name: 'thana 55', districtId: 13 },
  ];

  thanaList: Array<{ id: number, name: string }> = [];

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
  horseDtoList: Array<HorseDto> = [];

  //for ag-grid
  frameworkComponents = { btnCellRenderer: CellComp };
  columnDefs: ColDef[] = [
    {
      headerName: 'Action', editable: false, colId: 'action', width: 200,
      cellRenderer: 'btnCellRenderer', resizable: true,
      cellRendererParams: {
        updateFlag: true,
        deleteFlag: true,
        viewFlag: true,
        update: (param: any) => {
          this.updateHorse(param);
        },
        delete: (param: any) => {
          this.deleteHorse(param);
        },
        view: (param: any) => {
          this.viewHorse(param);
        }
      },
      pinned: 'left'
    },
    { headerName: 'Id', field: 'divisionId', editable: false, colId: 'divisionId', width: 100, filter: true },
    { headerName: 'districtId', field: 'districtId', editable: false, colId: 'districtId', width: 100, filter: true },
    { headerName: 'thanaId', field: 'thanaId', editable: false, colId: 'thanaId', width: 100, filter: true },
    { headerName: 'gender', field: 'gender', editable: false, colId: 'gender', width: 100, filter: true },
  ];

  constructor(
    private crudPracticeOneDtoService: CrudPracticeOneDtoService,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.search();
  }

  private updateHorse(param: any) {
    console.log(param.data);
  }

  private deleteHorse(param: any) {
    console.log(param.data);
  }

  private viewHorse(param: any) {
    console.log(param.data);
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
      this.horseDtoList = e;
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

    // console.log($event);
    this.districtList = this.districtWithDivisionList.filter((item) => item.divisionId == $event.id);
    console.log(this.districtList);
  }

  onSelectDistrict($event: { id: number, name: string }) {
    this.crudPracticeOneFg.patchValue({
      districtName: $event.name

    });

    // console.log($event);
    console.log(this.thanaWithDistrictList);
    this.thanaList = this.thanaWithDistrictList.filter((item) => item.districtId == $event.id);
    console.log(this.thanaList);
  }

  onSelectThana($event: { id: number, name: string }) {
    this.crudPracticeOneFg.patchValue({
      thanaName: $event.name
    });
  }

  parentVal: number = 1;
  rajitValue: string = "hello world";

  click1() {
    this.parentVal = this.parentVal + 1;
  }

  fn1(v: string) {
    console.log(v);
  }

  fn2(v: number) {
    console.log(v);

  }


}

