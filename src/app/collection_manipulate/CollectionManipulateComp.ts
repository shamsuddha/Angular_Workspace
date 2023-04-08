import {Component, OnInit} from "@angular/core";

class BirdDto {

  id: number | null = null;
  name: string | null = null;
  age: number | null = null;

  constructor(o?: Partial<BirdDto>) {
    Object.assign(this, o);
  }
}

@Component({
  selector: 'CollectionManipulateComp',
  standalone: true,
  template: `
    <button (click)="showSeniorBird()">senior bird</button>

  `,
})
export class CollectionManipulateComp implements OnInit {

  birdDtoList: Array<BirdDto> = [];

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const birdDto: BirdDto = new BirdDto({id: i, name: "name " + i, age: 10 + i});
      this.birdDtoList = [...this.birdDtoList, JSON.parse(JSON.stringify(birdDto))];
    }
    console.log(this.birdDtoList)
  }

  showSeniorBird() {
    const t: Array<BirdDto> = this.birdDtoList
    for (let i = 0; i < this.birdDtoList.length; i++) {
      const birdDtoT: BirdDto = this.birdDtoList[i];
      if (birdDtoT.age && birdDtoT.age > 15) {
        console.log(birdDtoT)
      }
    }
  }
}
