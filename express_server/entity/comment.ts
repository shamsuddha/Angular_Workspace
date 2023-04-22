export class Comment {

  id: number | null = null;
  body: string | null = null;


  /*createdAt
  createdBy
  updatedAt
  updatedBy*/


  constructor(o?: Partial<Comment>) {
    Object.assign(this, o);
  }
}
