export class BookDto {
  id: number | null = null;
  bookName: string | null = null;

  constructor(o?: Partial<BookDto>) {
    Object.assign(this, o);
  }
}
