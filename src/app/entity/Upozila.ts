import {
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import {AuditLog} from "./AuditLog";
import {District} from './District';

export class Upozila extends AuditLog {

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  // upozuka many to one district
  @prop() district: District | null = null;
  @prop() districtId: number | null = null;

  constructor(o?: Partial<Upozila>) {
    super();
    Object.assign(this, o);
  }
}
