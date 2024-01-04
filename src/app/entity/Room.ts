import {
  prop, propArray,
} from '@rxweb/reactive-form-validators';

import {AuditLog} from "./AuditLog";
import { Floor } from './Floor';

export class Room extends AuditLog{  

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  @prop() code: string | null = null;

  @prop() floor: Floor | null = null;
  @prop() floorId: number | null = null;
  
  constructor(o?: Partial<Room>) {
    super();
    Object.assign(this, o);
  }
}
