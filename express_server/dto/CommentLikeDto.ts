import {UserDto} from "./UserDto";
import {CommentDto} from "./CommentDto";

export class CommentLikeDto {

  id: number | null = null;
  userDto: UserDto | null = null;
  commentDto: CommentDto | null = null;

  createdDateTime: string | null = null;

  constructor(o?: Partial<CommentLikeDto>) {
    Object.assign(this, o);
  }
}
