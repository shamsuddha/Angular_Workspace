import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Division } from "../entity/Division";
import { DivisionSearchDto } from "../dto/request/DivisionSearchDto";

@Injectable({providedIn: 'root'})
export class DivisionController {

  constructor(private httpClient: HttpClient,) {
  }

  save(division: Division): Observable<Division> {
    return this.httpClient.post<Division>('http://localhost:8080/division/save', division);
  }

  // saveWithRoom(division: Division): Observable<Division> {
  //   return this.httpClient.post<Division>('http://localhost:8080/division/save-with-room', division);
  // }

  update(division: Division): Observable<Division> {
    return this.httpClient.put<Division>('http://localhost:8080/division/update', division);
  }

  delete(division: Division): Observable<boolean> {
    //console.log(division);
    return this.httpClient.delete<boolean>('http://localhost:8080/division/delete', {body: division})
    //.subscribe((e)=>{ });
  }

  search(divisionSearchDto: DivisionSearchDto): Observable<Array<Division>> {
    return this.httpClient.post<Array<Division>>('http://localhost:8080/division/search', divisionSearchDto);
  }

  searchWithDistrictList(): Observable<Array<Division>> {
    return this.httpClient.post<Array<Division>>('http://localhost:8080/division/search-with-districtList', {});
  }
}