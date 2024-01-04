export class UserSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<UserSearchDto>) {
    Object.assign(this, o);
  }
}
