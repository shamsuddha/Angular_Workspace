import {Component, OnInit} from "@angular/core";

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
    <button (click)="load()">load</button>
    <button (click)="showSeniorBird()">senior bird</button>
  `,
})

export class CollectionManipulateComp implements OnInit {

  birdDtoList: Array<BirdDto> = [];
  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      const birdDto: BirdDto = new BirdDto({id: i, name: "name " + i, age: 10 + i, aliveFlag: true});
      birdDto.nestDto = new NestDto({id: 10 * i + 1, location: "location " + (10 * i + 1)});
      birdDto.eggDtoList = this.getEggDtoList(birdDto);
      this.birdDtoList = [...this.birdDtoList, JSON.parse(JSON.stringify(birdDto))];
    }
    console.log(this.birdDtoList);
  }

  load() {
    console.log(this.birdDtoList);
  }

  private getEggDtoList(birdDto: BirdDto): Array<EggDto> {
    let tempArr: Array<EggDto> = [];
    if (birdDto.id) {
      const t = birdDto.id * 10;
      for (let i = 1; i <= birdDto.id; i++) {
        tempArr = [...tempArr, JSON.parse(JSON.stringify(
          new EggDto({id: t + i, size: 'size ' + (t + i)})))];
      }
    }
    return tempArr;
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
