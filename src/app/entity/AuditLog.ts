import {prop} from '@rxweb/reactive-form-validators';

export class AuditLog {

  @prop() createdAt: string | null = null;
  @prop() lastModifiedAt: string | null = null;

  @prop() enabled: boolean = true;

  @prop() page: number  = 0;
  @prop() size: number  = 10;
  @prop() updateMode: boolean  = false;
  @prop() loadingMode: boolean  = false;

  constructor(o?: Partial<AuditLog>) {
    Object.assign(this, o);
  }
}
