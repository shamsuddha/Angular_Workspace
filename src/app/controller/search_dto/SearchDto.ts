import { prop, } from '@rxweb/reactive-form-validators';

export class SearchDto {

  @prop() page: number = 0;
  @prop() size: number = 10;

  constructor(o?: Partial<SearchDto>) {
    Object.assign(this, o);
  }
}
