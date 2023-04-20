import {UserDto} from "./UserDto";
import {CommentLikeDto} from "./CommentLikeDto";

export class CommentDto {

  id: number | null = null;
  body: string | null = null;

  likeCount: number | null = null;

  commentLikeDtoList: Array<CommentLikeDto> = [];

  userDto: UserDto | null = null;

  commentDtoList:  Array<CommentDto> = [];

  constructor(o?: Partial<CommentDto>) {
    Object.assign(this, o);
  }
}
