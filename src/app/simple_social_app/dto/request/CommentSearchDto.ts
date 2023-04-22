export class CommentSearchDto {

  idList: Array<number> = [];
  postId: number | null = null;

  constructor(o?: Partial<CommentSearchDto>) {
    Object.assign(this, o);
  }
}
