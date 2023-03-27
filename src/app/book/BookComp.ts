import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { BookDtoService } from './BookDtoService';
import { BookDto } from './BookDto';

@Component({
  selector: 'BookComp',
  templateUrl: './BookComp.html',
  styleUrls: ['./BookComp.scss']
})
export class BookComp {

  constructor(private bookDtoService: BookDtoService) { }

  bookDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    bookName: new FormControl<string | null>(null),
    authorName: new FormControl<string | null>(null),
    publisherName: new FormControl<string | null>(null),

  });

  bookDtoList: Array<BookDto> = [];

  save() {

    console.log(this.bookDtoFg.value);
    this.bookDtoService.saveBook(new BookDto(this.bookDtoFg.value)).subscribe(e => e);


  }

  loadAllData() {
    this.bookDtoService.getBookList().subscribe((e: Array<BookDto>) => {
      this.bookDtoList = e;
    })
  }






}



