export class BookDto {

  id: number | null = null;
  bookName: string | null = null;
  authorName: string | null = null;
  publisherName: string | null = null;

constructor(o?: Partial<BookDto>){
  Object.assign(this, o)
}

}