export class EmployeeSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<EmployeeSearchDto>) {
    Object.assign(this, o);
  }
}
