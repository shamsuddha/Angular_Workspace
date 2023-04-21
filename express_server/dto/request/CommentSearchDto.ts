export class CommentSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<CommentSearchDto>) {
    Object.assign(this, o);
  }
}
