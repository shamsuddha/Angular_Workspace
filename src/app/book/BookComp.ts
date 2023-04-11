import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BookDtoService } from './BookDtoService';
import { BookDto } from './BookDto';
import { ColDef } from 'ag-grid-community';
import { CellComp } from './CellComp';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'BookComp',
  templateUrl: './BookComp.html',
  styleUrls: ['./BookComp.scss']
})
export class BookComp {

  bookDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    bookName: new FormControl<string | null>(null, Validators.required),
    authorName: new FormControl<string | null>(null, Validators.required),
    publisherName: new FormControl<string | null>(null, Validators.required),
    publishedYear: new FormControl<number | null>(null, Validators.required),
  });
  bookDtoList: Array<BookDto> = [];
  //for ag-grid
  frameworkComponents = { btnCellRenderer: CellComp };
  columnDefs: ColDef[] = [
    {
      headerName: 'Action', editable: false, colId: 'action', width: 200,
      cellRenderer: 'btnCellRenderer', resizable: true,
      cellRendererParams: {
        updateFlag: true,
        deleteFlag: true,
        viewFlag: true,
        update: (param: any) => {
          this.updateBook(param);
        },
        delete: (param: any) => {
          this.deleteBook(param);
        },
        view: (param: any) => {
          this.viewBook(param);
        }
      },
      pinned: 'left'
    },
    { headerName: 'Id', resizable: true, field: 'id', editable: false, colId: 'id', width: 100, filter: true },
    { headerName: 'Book Name', resizable: true, field: 'bookName', editable: false, colId: 'bookName', width: 100, filter: true },
    { headerName: 'Author Name', resizable: true, field: 'authorName', editable: false, colId: 'authorName', width: 100, filter: true },
    { headerName: 'Publisher Name', resizable: true, field: 'publisherName', editable: false, colId: 'publisherName', width: 100, filter: true },
    { headerName: 'Published Year', resizable: true, field: 'publishedYear', editable: false, colId: 'publishedYear', width: 100, filter: true },
  ];

  constructor(private bookDtoService: BookDtoService, private http: HttpClient) { }

  ngOnInit() {
    this.search();
  }

  private updateBook(param: any) {

    this.bookDtoFg.patchValue({
      id: param.data.id,
      bookName: param.data.bookName,
      authorName: param.data.authorName,
      publisherName: param.data.publisherName,
      publishedYear: param.data.publishedYear,
     
    });
    //this.search();
    //console.log(param.data);
  }

  private deleteBook(param: any) {
    this.bookDtoService.deleteBookDto(param.data);
    this.search();
    //console.log(param.data);
  }

  private viewBook(param: any) {
    console.log(param.data);
  }

  save() {
    console.log(this.bookDtoFg.value);
    this.bookDtoService.saveBook(new BookDto(this.bookDtoFg.value)).subscribe(e => e);
  }

  search() {
    this.bookDtoService.getBookList().subscribe((e: Array<BookDto>) => {
      this.bookDtoList = e;
    })
  }

  reset() {
    this.bookDtoFg.reset();
  }

  
 
  view(bookDto: BookDto) {
    throw new Error('Method not implemented.');
  }

  edit(bookDto: BookDto) {
    this.bookDtoFg.patchValue({
      id: bookDto.id,
      bookName: bookDto.bookName,
      authorName: bookDto.authorName,
      publisherName: bookDto.publisherName,
      publishedYear: bookDto.publishedYear,
     
    });
    //this.search();
  }
  delete(bookDto: BookDto) {
    this.bookDtoService.deleteBookDto(bookDto);
    this.search();
  }

  update() {
    this.bookDtoService.updateBookDto(new BookDto(this.bookDtoFg.value)).subscribe(e => {
        console.log(e);
        this.search();
      })
  }

}