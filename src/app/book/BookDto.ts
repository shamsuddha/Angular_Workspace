export class BangladeshDto {
  id: number | null = null;
  bookName: string | null = null;

  constructor(o?: Partial<BangladeshDto>) {
    Object.assign(this, o);
  }
}
