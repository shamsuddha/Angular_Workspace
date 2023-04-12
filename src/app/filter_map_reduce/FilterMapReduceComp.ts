import {Component} from '@angular/core';
import {Observable} from "rxjs";

class Student{
  id:number =0;
  name:string = "";
  age:number = 0;
}

@Component({
  selector: 'FilterMapReduceComp',
  standalone: true,
  template: `
    <button (click)="click1()">click1</button>
    <button (click)="click2()">click2</button>
  `,
})
export class FilterMapReduceComp {

  click1() {
    const priceList: Array<number> = [3, 6, 8, 9, 15, 17, 23];

    console.log(priceList.filter(e => e > 9).map(e => e + 2)
      //[17,19,25]
      .reduce((total, num) => {
        console.log(total)
        console.log(num)
        return total + num;
      }),5);

    const t1 = null;
    const t2 = 5;
    const t3:Array<number> = [5,6,78,9,5,54];

    const t4 = "sdkjfhsk";
    const t5:Array<string> = ["sdfg","truyr","sdfrgtgh"];

    //array of class less object
    const t19 :Array<{id:number,name:string,age:number}> = [
      {id:1,name:"student 1",age :21},
      {id:2,name:"student 2",age :22},
      {id:3,name:"student 3",age :23},
      {id:4,name:"student 4",age :24},
    ];
    //array of class based object
    const t20 :Array<Student> = [
      {id:1,name:"student 1",age :21},
      {id:2,name:"student 2",age :22},
      {id:3,name:"student 3",age :23},
      {id:4,name:"student 4",age :24},
    ];

  }


  click2() {

  }


}
