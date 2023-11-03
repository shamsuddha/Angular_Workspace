import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  catchError,
  filter,
  from,
  map,
  Observable,
  of,
  Subject,
  tap,
  throwError,
} from 'rxjs';

class StudentDto {
  id: number = 0;
  name: string = '';

  constructor(o?: Partial<StudentDto>) {
    Object.assign(this, o);
  }
}

class TeacherDto {
  id: number = 0;
  name: string = '';
  subject: string = '';
  credit: number = 0;

  constructor(o?: Partial<TeacherDto>) {
    Object.assign(this, o);
  }
}

@Component({
  selector: 'RxjsExample2Comp',
  standalone: true,
  template: `
    <button (click)="click1()">click1</button>
    <button (click)="click2()">click2</button>
    <button (click)="click3()">click3</button>
    <button (click)="click4()">click4</button>
    <button (click)="click5()">click5</button>
    <button (click)="click6()">click6</button>
    <button (click)="click7()">click7</button>
    <button (click)="click8()">click8</button>
  `,
})
export class RxjsExample2Comp {
  constructor(public http: HttpClient) {}

  fakeApi(): Observable<Array<StudentDto>> {
    const t: Observable<Array<StudentDto>> = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next([
          new StudentDto({ id: 1, name: 'name 1' }),
          new StudentDto({ id: 2, name: 'name 2' }),
        ]);
      }, 2000);
      setTimeout(() => {
        subscriber.next([
          new StudentDto({ id: 3, name: 'name 3' }),
          new StudentDto({ id: 4, name: 'name 4' }),
        ]);
      }, 3000);
    });
    return t;
  }

  rajitApi(): Observable<Array<StudentDto>> {
    const t: Observable<Array<StudentDto>> = new Observable((subscriber) => {
      subscriber.next([
        new StudentDto({ id: 1, name: 'name 1' }),
        new StudentDto({ id: 2, name: 'name 2' }),
        new StudentDto({ id: 3, name: 'name 3' }),
        new StudentDto({ id: 4, name: 'name 4' }),
        new StudentDto({ id: 5, name: 'name 5' }),
        new StudentDto({ id: 6, name: 'name 6' }),
        new StudentDto({ id: 7, name: 'name 7' }),
        new StudentDto({ id: 8, name: 'name 8' }),
      ]);
    });
    return t;
  }

  newApi(): Observable<Array<any>> {
    const t: Observable<Array<any>> = new Observable((subscriber) => {
      subscriber.next(['kkjjTYYTF', 'TTTThjgjgj']);
      subscriber.next(['kkjjTYYTF', 1, 23, 2323, 'fff']);
    });
    return t;
  }

  click1() {
    this.rajitApi()
      .pipe(
        filter((e: Array<StudentDto>) => {
          if (e.find((t: StudentDto) => t.id == 4)) {
            return false;
          } else {
            return true;
          }
        }),
        map((e: Array<StudentDto>) => {
          e.map((t: StudentDto) => {
            t.name = t.name.toUpperCase();
            return t;
          });
          return e;
        }),
        tap((e: Array<StudentDto>) => console.log(e))
      )
      .subscribe((e: Array<StudentDto>) => console.log(e));
  }

  click2() {
    this.newApi()
      .pipe(
        filter((e: Array<any>) => e.length == 2),
        map((e: Array<any>) => {
          const j: any = e.concat(10);
          // console.log(j);
          return j;
        }),
        tap((e) => console.log(e))
      )
      .subscribe((e: Array<any>) => console.log(e));
  }

  click3() {
    this.newApi2().pipe(
      filter((e) => e.length == 4),
      map((e) => {
        return e;
      }),
      tap((e) => console.log(e))
    );
  }

  click4() {
    const source = from([1, 2, 3, 4, 5]);
    source
      .pipe(
        filter((e) => e === 2),
        map((e) => e * 100)
      )
      .subscribe((value) => console.log(value));
  }

  newApi2(): Observable<Array<StudentDto>> {
    const t: Observable<Array<StudentDto>> = new Observable((Subscriber) => {
      Subscriber.next([
        { id: 1, name: 'name 1' },
        { id: 2, name: 'name 2' },
        { id: 3, name: 'name 3' },
        { id: 4, name: 'name 4' },
        { id: 5, name: 'name 5' },
        { id: 6, name: 'name 6' },
        { id: 7, name: 'name 7' },
        { id: 8, name: 'name 8' },
        { id: 9, name: 'name 9' },
      ]);
    });
    return t;
  }

  click5() {
    this.rajitApi()
      .pipe(
        filter((e: Array<StudentDto>) => {
          if (e.find((t: StudentDto) => t.id === 4)) {
            return false;
          } else {
            return true;
          }
        }),
        map((e: Array<StudentDto>) => {
          e.map((singleT: StudentDto) => {
            singleT.name = singleT.name.toUpperCase();
            return singleT;
          });
          return e;
        })
      )
      .subscribe((e) => console.log(e));
  }

  click6() {}

  click7() {}

  click8() {}
}
