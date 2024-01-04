import {
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import {AuditLog} from "./AuditLog";
import { Room } from './Room';

export class Floor extends AuditLog{

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  @prop() code: string | null = null;

  @propArray(Room, {createBlank: false})
  roomList: Array<Room> = [];
  roomListSerde: Array<Room> = [];

  constructor(o?: Partial<Floor>) {
    super();
    Object.assign(this, o);
  }
}
