import {
  NumericValueType, maxLength, minLength, numeric, pattern,
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import { Address } from './Address';
import { Role } from './Role';
import { UserInfoRole } from './UserInfoRole';
import {AuditLog} from "./AuditLog";
import { Post } from './Post';

export class UserInfo extends AuditLog{  // FormGroup

  @prop() id: number | null = null; // FormControl
  @prop()
  @minLength({ value: 3, message: 'Minimum 3 character required' })
  @maxLength({ value: 10, message: 'Maximum 10 character allowed' })
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false,})
  @trim()
  @required({ message: 'name is required'})
   name: string | null = null;
  @prop() email: string | null = null;
  @prop() mobile: number | null = null;

  @propArray(Post, {createBlank: false})
  postList: Array<Post> = [];
  postListSerde: Array<Post> = [];

  @propArray(Comment, {createBlank: false})
  commentList: Array<Comment> = [];
  commentListSerde: Array<Comment> = [];

  @propArray(UserInfoRole, {createBlank: false})
  userInfoRoleList: Array<UserInfoRole> = [];
  userInfoRoleListSerde: Array<UserInfoRole> = [];
  
  // @propObject(Brand, { autoCreate: true }) brand: Brand | null = null;

  constructor(o?: Partial<UserInfo>) {
    super();
    Object.assign(this, o);
  }
}
