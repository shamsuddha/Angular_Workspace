import { prop, propArray } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";
import { UserInfoRole } from "./UserInfoRole";
import {AuditLog} from "./AuditLog";

export class Role extends AuditLog{

  @prop()
  id: number | null = null;
  @prop()
  name: string | null = null;
  // userInfoList: Array<UserInfo> | null = null;

  @propArray(UserInfoRole)
  userInfoRoleList: Array<UserInfoRole> = [];

  constructor(o?: Partial<Role>) {
    super();
    Object.assign(this, o);
  }
}
