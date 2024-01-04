import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserDto} from "../dto/UserDto";

@Injectable({
  providedIn: 'root'
})
export class UserDtoApiService {

  constructor() {
  }


  search():Observable<Array<UserDto>>{
    return new Observable<Array<UserDto>>(e=>{
      e.next([
        new UserDto({id:1,name:"name 1"}),
        new UserDto({id:2,name:"name 2"}),
        new UserDto({id:3,name:"name 3"})
      ])
    })
  }
}
