import {SearchDto} from "./SearchDto";
import { prop, propObject } from "@rxweb/reactive-form-validators";

export class UpozilaSearchDto extends SearchDto {


  @prop() name: string | null = null;
  @prop() districtId: number | null = null;

  constructor(o?: Partial<UpozilaSearchDto>) {
    super();
    Object.assign(this, o);
  }
}
