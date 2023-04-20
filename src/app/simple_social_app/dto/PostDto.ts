import {UserDto} from "./UserDto";
import {PostLikeDto} from "./PostLikeDto";
import {CommentDto} from "./CommentDto";

export class PostDto {

  id: number | null = null;
  body: string | null = null;
  likeCount: number | null = null;

  postLikeDtoList: Array<PostLikeDto> = [];

  userDto: UserDto | null = null;

  commentDtoList:  Array<CommentDto> = [];

  constructor(o?: Partial<PostDto>) {
    Object.assign(this, o);
  }

}
