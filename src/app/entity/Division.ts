import {
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import { AuditLog } from "./AuditLog";
import { District } from './District';

export class Division extends AuditLog {

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  // Division one to many district
  @propArray(District, {createBlank: false})
  districtList: Array<District> = [];
  districtListSerde: Array<District> = [];

  constructor(o?: Partial<Division>) {
    super();
    Object.assign(this, o);
  }
}