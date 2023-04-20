import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserDto} from "../dto/UserDto";
import {PostDto} from "../dto/PostDto";

@Injectable()
export class PostDtoApiService {

  constructor() {
  }


  save():Observable<PostDto>{
    return new Observable(e=>{
      e.next(
        new PostDto({id:1,body:"name 1"}),
      )
    })
  }


  search():Observable<Array<PostDto>>{
    return new Observable(e=>{
      e.next([
        new PostDto({id:1,body:"name 1"}),
        new PostDto({id:1,body:"name 1"}),
        new PostDto({id:1,body:"name 1"}),
      ])
    })
  }

}
