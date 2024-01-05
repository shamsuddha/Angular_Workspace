import {PostDto} from "./PostDto";

export class UserDto {

  id: number | null = null;
  name: string | null = null;

  postDtoList: Array<PostDto> = [];

  constructor(o?: Partial<UserDto>) {
    Object.assign(this, o);
  }
}
