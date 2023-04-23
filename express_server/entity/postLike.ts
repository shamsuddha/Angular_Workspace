import { PostDto } from "../dto/PostDto";
import { UserDto } from "../dto/UserDto";

export class PostLike {

  id: number | null = null;
  userDto : UserDto | null = null;
  postDto : PostDto | null = null;

  createdDateTime: string | null = null;
  constructor(o?: Partial<PostLike>) {
    Object.assign(this, o);
  }
}
