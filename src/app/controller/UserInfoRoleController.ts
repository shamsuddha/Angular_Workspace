import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfoRole } from "../entity/UserInfoRole";
import { UserInfoRoleSearchDto } from "../dto/request/UserInfoRoleSearchDto";

@Injectable({ providedIn: 'root' })
export class UserInfoRoleController {

  constructor(private httpClient: HttpClient,) { }

  save(userInfoRole: UserInfoRole): Observable<UserInfoRole> {
    return this.httpClient.post<UserInfoRole>('http://localhost:8080/user-info-role/save', userInfoRole);
  }

  update(userInfoRole: UserInfoRole): Observable<UserInfoRole> {
    return this.httpClient.put<UserInfoRole>('http://localhost:8080/user-info-role/update', userInfoRole);
  }

  delete(userInfoRole: UserInfoRole): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/user-info-role/delete', { body: userInfoRole })
    //.subscribe((e)=>{ });
  }

  search(userInfoRoleSearchDto: UserInfoRoleSearchDto): Observable<Array<UserInfoRole>> {
    return this.httpClient.post<Array<UserInfoRole>>('http://localhost:8080/user-info-role/search', userInfoRoleSearchDto);
  }

  searchWithUserInfoRole(): Observable<Array<UserInfoRole>> {
    return this.httpClient.post<Array<UserInfoRole>>('http://localhost:8080/user-info-role/search-with-user-info-role',{});
  }
}
