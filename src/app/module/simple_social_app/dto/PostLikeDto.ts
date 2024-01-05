import {UserDto} from "./UserDto";
import {PostDto} from "./PostDto";

export class PostLikeDto {

  id: number | null = null;
  userDto : UserDto | null = null;
  postDto : PostDto | null = null;

  createdDateTime: string | null = null;

  constructor(o?: Partial<PostLikeDto>) {
    Object.assign(this, o);
  }
}
