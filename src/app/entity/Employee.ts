import {prop,} from '@rxweb/reactive-form-validators';
import {AuditLog} from "./AuditLog";


export class Employee extends AuditLog{

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  @prop() code: string | null = null;
  @prop() roleTemp: any | null = null;

  constructor(o?: Partial<Employee>) {
    super();
    Object.assign(this, o);
  }
}
