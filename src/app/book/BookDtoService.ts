import { BookCompModule } from './BookCompModule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDto } from './BookDto';

@Injectable({
  providedIn: 'root'
})

export class BookDtoService {
 

  constructor(private httpClient: HttpClient) { }

  getBookList(): Observable<Array<BookDto>> {
    return this.httpClient.get<Array<BookDto>>("http://localhost:3000/book");
  }

  saveBook(bookDto: BookDto): Observable<BookDto> {
    return this.httpClient.post<BookDto>("http://localhost:3000/book", bookDto);
  }

  updateBookDto(bookDto: BookDto) {
    return this.httpClient.put<BookDto>('http://localhost:3000/book/'
      + bookDto.id, bookDto);
  }
  deleteBookDto(bookDto: BookDto) {
    this.httpClient.delete<BookDto>('http://localhost:3000/book/' + bookDto.id).subscribe();
    console.log("successfully Deleted...");
  }


}