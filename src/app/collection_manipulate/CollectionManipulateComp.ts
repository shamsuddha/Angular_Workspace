import { Component, OnInit } from "@angular/core";

class NestDto {
  id: number | null = null;
  location: string | null = null;

  constructor(o?: Partial<NestDto>) {
    Object.assign(this, o);
  }
}
class EggDto {
  id: number | null = null;
  size: string | null = null;

  constructor(o?: Partial<EggDto>) {
    Object.assign(this, o);
  }
}

class BirdDto {
  id: number | null = null;
  name: string | null = null;
  age: number | null = null;
  aliveFlag: boolean | null = null;

  nestDto: NestDto | null = null;
  eggDtoList: Array<EggDto> = []

  constructor(o?: Partial<BirdDto>) {
    Object.assign(this, o);
  }
}

// class CourseDto {
//   courseName: string | null = null;
//   courseCode: string | null = null;
//   courseTeacher: string | null = null;

//   constructor(o?: Partial<CourseDto>) {
//     Object.assign(this, o);
//   }
// }

// class StudentDto {
//   id: number | null = null;
//   studentName: string | null = null;
//   studentAge: number | null = null;
//   courseDtoList: Array<CourseDto> = [];

//   constructor(o?: Partial<StudentDto>) {
//     Object.assign(this, o);
//   }
// }

@Component({
  selector: 'CollectionManipulateComp',
  standalone: true,
  template: `
    <button (click)="showSeniorBird()">senior bird</button>
  `,
})
export class CollectionManipulateComp implements OnInit {

  birdDtoList: Array<BirdDto> = [];
  eggDtoList: Array<EggDto> = [];

  ngOnInit(): void {

    for (let i = 1; i <= 10; i++) {

      const birdDto: BirdDto = new BirdDto({ id: i, name: "name " + i, age: 10 + i });
      const eggDtoList: Array<EggDto> = this.getEggDto(birdDto)
      birdDto.eggDtoList = eggDtoList;
      const nestDto: NestDto = new NestDto({ id: 0, location: "" });
      birdDto.nestDto = nestDto;
      this.birdDtoList = [...this.birdDtoList, JSON.parse(JSON.stringify(birdDto))];
    }
    console.log(this.birdDtoList)
  }

  private getEggDto(birdDto: BirdDto): Array<EggDto> {

    for (let i = 1; i <= this.birdDtoList.length; i++) {

        // console.log(birdDto);
      const eggDto: EggDto = new EggDto({id:i *10 + i, size: "size" + i + 10})

     // console.log(eggDto);

     const arrayOfEggDto : any = [...this.eggDtoList, JSON.parse(JSON.stringify(eggDto))];

       console.log(arrayOfEggDto);
    }

    // console.log(birdDto.eggDtoList);

    return [];

  }

  showSeniorBird() {
    for (let i = 0; i < this.birdDtoList.length; i++) {
      const birdDtoT: BirdDto = this.birdDtoList[i];
      if (birdDtoT.age && birdDtoT.age > 15) {
        console.log(birdDtoT)
      }
    }
  }
}
