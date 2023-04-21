export class Post {

  id: number | null = null;
  body: string | null = null;

  constructor(o?: Partial<Post>) {
    Object.assign(this, o);
  }
}
