import {Component} from '@angular/core';
import {Observable} from "rxjs";

class Student{
  id:number =0;
  name:string = "";
  age:number = 0;
}

@Component({
  selector: 'RxjsExampleComp',
  standalone: true,
  template: `
    <button (click)="click1()">click1</button>
    <button (click)="click2()">click2</button>
  `,
})
export class RxjsExampleComp {

  click1() {
    const priceList: Array<number> = [3, 6, 8, 9, 15, 17, 23];

    let newArray = [];
    for (let i = 0; i < priceList.length; i++) {
      if (priceList[i] > 9) {
        newArray.push(priceList[i] + 2)
      }
    }
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
      sum = sum + newArray[i]
      //console.log(newArray[i]);
    }
    //console.log(sum)

    //priceList.filter(e => e > 9).map(e => e + 2).forEach((e: any) => console.log(e));

    //[3, 6, 8, 9, 15, 17, 23]           [15, 17, 23]
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

/*
  {
    id:1
    name: jhon,
    children:[
      {
        id:11
        name: Steve,
        children:[
           {
              id:111
              name: Lee,
           },{
              id:112
              name: Bob,
           },{
              id:113
              name: Ella,
           }
        ]
      },
      {
        id:12
        name: Rohan,
        children:[
           {
              id:121
              name: Sal,
           },{
              id:122
              name: Emma,
              children:[
                 {
                    id:1221
                    name: Tom,
                 },{
                    id:1222
                    name: Raj,
                 }
              ]
           }
        ]
      }
    ]
  }

*/

/*
  person
  id    name         parent_id
  1     jhon         null
  11    steve        1
  12    rohan        1
  111    Lee         11
  112    Bob         11
  113    Ella        11
  121    Sal         12
  122    Emma        12
  1221    Tom        122
  1222    Raj        122

  student
  id    name          age
  1     student 1      21
  2     student 2      22
  3     student 3      23
  4     student 4      24

  book
  id    name        fk_student_id
  1     book 1      1
  2     book 2      1
  3     book 3      1
  4     book 4      2
*/

  }


  click2() {

    const observable: Observable<number> = new Observable((subscriber) => {

      subscriber.next(12);

      setTimeout(() => {
        subscriber.next(21);
      }, 1000);
      setTimeout(() => {
        subscriber.next(35);
      }, 2000);
      setTimeout(() => {
        subscriber.next(48);
      }, 3000);
    });

    observable.subscribe((e => {
      console.log(e)
    }))

    observable.subscribe((e => {
      console.log(e)
    }))

    observable.subscribe((e => {
      console.log(e)
    }))

  }


}
