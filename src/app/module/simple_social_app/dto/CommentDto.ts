import {UserDto} from "./UserDto";
import {CommentLikeDto} from "./CommentLikeDto";
import {PostDto} from "./PostDto";

export class CommentDto {

  id: number | null = null;
  body: string | null = null;

  likeCount: number | null = null;

  commentLikeDtoList: Array<CommentLikeDto> = [];

  userDto: UserDto | null = null;

  postDto: PostDto | null = null;
  commentDtoList: Array<CommentDto> = [];

  createdDateTime: string | null = null;

  constructor(o?: Partial<CommentDto>) {
    Object.assign(this, o);
  }
}
