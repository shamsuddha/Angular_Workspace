import { CrudPracticeOneComp } from './../crud_practice_one/CrudPracticeOneComp';
import { Component } from '@angular/core';
import { filter, map, Observable, subscribeOn, Subscriber, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

class StudentDto {
  id: number = 0;
  name: string = "";

  constructor(o?: Partial<StudentDto>) {
    Object.assign(this, o)
  }
}

@Component({
  selector: 'RxjsExample2Comp',
  standalone: true,
  template: `
    <button (click)="click2()">click2</button>
    <button (click)="click3()">click3</button>
   
  `,
})
export class RxjsExample2Comp {


  constructor() {
  }

  click2() {
    // this.rajitApi()
    //   .pipe(
    //     filter((e: Array<StudentDto>) => {
    //       if (e.find((t: StudentDto) => t.id == 4)) {
    //         return false;
    //       }
    //       else {
    //         return true;
    //       }
    //     }),
    //     map((e: Array<StudentDto>) => {
    //       e.map((t: StudentDto) => {
    //         t.name = t.name.toUpperCase()
    //         return t
    //       })
    //       return e;
    //     }),
    //     //tap((e:Array<StudentDto>)=> console.log(e))
    //   )
    //   .subscribe((e: Array<StudentDto>) => console.log(e));
  }

  // fakeApi(): Observable<Array<StudentDto>> {
  //   const t: Observable<Array<StudentDto>> = new Observable((subscriber) => {
  //     setTimeout(() => {
  //       subscriber.next([new StudentDto({ id: 1, name: "name 1" }), new StudentDto({ id: 2, name: "name 2" })]);
  //     }, 2000);
  //     setTimeout(() => {
  //       subscriber.next([new StudentDto({ id: 3, name: "name 3" }), new StudentDto({ id: 4, name: "name 4" })]);
  //     }, 3000);

  //   })
  //   return t;
  // }

  // rajitApi(): Observable<Array<StudentDto>> {
  //   const t: Observable<Array<StudentDto>> = new Observable((subscriber) => {
  //     subscriber.next([new StudentDto({ id: 4, name: "name 1" }), new StudentDto({ id: 2, name: "name 2" })]);
  //   });
  //   return t;
  // }


  newApi(): Observable<Array<any>> {
    const t: Observable<Array<any>> = new Observable((subscriber) => {
      subscriber.next(["kkjjTYYTF", "TTTThjgjgj"])
      subscriber.next(["kkjjTYYTF", 1,23,2323,"fff"])
    })
    return t;

  }

  newApi2(): Observable<Array<StudentDto>> {

    const t: Observable<Array<StudentDto>> = new Observable((Subscriber) => {
      Subscriber.next([{ id: 1, name: "name 1" }, { id: 2, name: "name 2" }]);
    })

    return t;

    // t.pipe(
    //   tap((e: Array<StudentDto>)=> console.log(e))
    // ).subscribe((e:Array<StudentDto>)=> console.log(e))

  }


  click3() {

    this.newApi()
      .pipe(
        filter((e: Array<any>) => e.length == 2),
        map((e: Array<any>) => {

          const j:any = e.concat(10)
         // console.log(j);
         return j;

        }),
        tap((e)=> console.log(e))
      )
      .subscribe((e: Array<any>) => console.log(e));

  }


  clicke(){
    this.newApi()
    .pipe(
      filter((e:Array<any>) => e.length == 2),
      map
    )
    .subscribe((e:Array<any>)=> console.log(e))
  }








}
