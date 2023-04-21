export class Comment {

  id: number | null = null;
  body: string | null = null;

  constructor(o?: Partial<Comment>) {
    Object.assign(this, o);
  }
}
