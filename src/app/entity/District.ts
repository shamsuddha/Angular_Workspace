import {
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import { AuditLog } from "./AuditLog";
import { Division } from './Division';
import { Upozila } from './Upozila';

export class District extends AuditLog {

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  // district many to one division
  @prop() division: Division | null = null;
  @prop() divisionId: number | null = null;
  // district one to many upozila
  @propArray(Upozila, {createBlank: false})
  upozilaList: Array<Upozila> = [];
  upozilaListSerde: Array<Upozila> = [];

  constructor(o?: Partial<District>) {
    super();
    Object.assign(this, o);
  }
}