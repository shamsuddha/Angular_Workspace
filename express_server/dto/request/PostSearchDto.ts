export class PostSearchDto {

  idList: Array<number> = [];

  userId: number | null = null;

  constructor(o?: Partial<PostSearchDto>) {
    Object.assign(this, o);
  }
}
