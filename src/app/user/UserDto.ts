import { BookDto } from "../book/BookDto";

export class UserDto{

  id: number | null = null;
  userName: string | null = null;
  email: string | null = null;
  password: string | null = null;
  bookDtoList: Array<BookDto> = [];

  constructor(o?: Partial<UserDto>){
    Object.assign(this, o);
  }
}