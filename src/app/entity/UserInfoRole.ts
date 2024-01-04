import { prop, propArray, propObject } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";
import { Role } from "./Role";
import {AuditLog} from "./AuditLog";


export class UserInfoRole extends AuditLog{

  @prop() id: number | null = null;

  //@propObject(UserInfo, { autoCreate: false })
  @prop()
  userInfo: UserInfo | null = null;
  @prop()
  userInfoId: number | null = null;

  //@propObject(Role, { autoCreate: false })
  @prop()
  role: Role | null = null;
  @prop() roleId: number | null = null;

  constructor(o?: Partial<UserInfoRole>) {
    super();
    Object.assign(this, o);
  }
}
