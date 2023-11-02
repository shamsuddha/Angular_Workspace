import { Component } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class StudentDto {
  id: number = 0;
  name: string = '';

  constructor(o?: Partial<StudentDto>) {
    Object.assign(this, o);
  }
}

@Component({
  selector: 'RxjsExampleComp',
  standalone: true,
  template: `
    <button (click)="printResult()">printResult</button>
    <button (click)="click2()">click2</button>
  `,
})
export class RxjsExampleComp {
  constructor(private httpClient: HttpClient) {}

  callApi(studentDto: StudentDto): Observable<StudentDto> {
    return this.httpClient.post<StudentDto>(
      'http://localhost:3000/student',
      studentDto
    );
  }

  printResult() {
    this.callApi(
      new StudentDto({ id: Date.now(), name: 'name ' + Date.now() })
    ).subscribe((e: StudentDto) => console.log(e));
  }

  // click2() {
  //   const observable: Observable<Array<string>> = new Observable(
  //     (subscriber) => {
  //       subscriber.next(['aa', 'bb']);
  //       setTimeout(() => {
  //         subscriber.next(['ccc', 'dddd', 'gggg']);
  //       }, 1000);
  //       setTimeout(() => {
  //         subscriber.next(['eee', 'f', 'fff', 'fffff']);
  //       }, 2000);
  //       setTimeout(() => {
  //         subscriber.next(['gggg', 'hhhhh', 'h', 'hh', 'hhhhh', 'hhhhh']);
  //       }, 3000);
  //     }
  //   );

click()
{
  const data = of(1, 'two', [3, 4], { key: 'value' });

  data.subscribe(value => console.log(value));
  
}




  //   //subscribing
  //   observable
  //     .pipe(
  //       filter((e: Array<string>) => e.length != 4),
  //       map((e: Array<string>) => {
  //         e[0] = e[0].toUpperCase();
  //         return e;
  //       }),
  //       tap((e: Array<string>) =>  console.log(e))
  //     )
  //     .subscribe((e: Array<string>) => {
  //       console.log(e);
  //     });

  //   /* observable.subscribe((e => {
  //      console.log(e);
  //    }));
  //    observable.subscribe((e => {
  //      console.log(e);
  //     v xc}));*/
  // }
}
