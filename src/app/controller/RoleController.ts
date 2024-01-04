import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Role } from "../entity/Role";
import { RoleSearchDto } from "../dto/request/RoleSearchDto";

@Injectable({ providedIn: 'root' })
export class RoleController {

  constructor(private httpClient: HttpClient,) { }

  save(role: Role): Observable<Role> {
    return this.httpClient.post<Role>('http://localhost:8080/role/save', role);
  }

  update(role: Role): Observable<Role> {
    return this.httpClient.put<Role>('http://localhost:8080/role/update', role);
  }

  delete(role: Role): Observable<boolean> {
    //console.log(role);
    return this.httpClient.delete<boolean>('http://localhost:8080/role/delete', { body: role })
    //.subscribe((e)=>{ });
  }

  search(roleSearchDto: RoleSearchDto): Observable<Array<Role>> {
    return this.httpClient.post<Array<Role>>('http://localhost:8080/role/search', roleSearchDto);
  }
}
