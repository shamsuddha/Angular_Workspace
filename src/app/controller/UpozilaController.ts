import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Upozila} from "../entity/Upozila";
import {UpozilaSearchDto} from "./search_dto/UpozilaSearchDto";

@Injectable({providedIn: 'root'})
export class UpozilaController {

  constructor(private httpClient: HttpClient,) {
  }

  save(upozila: Upozila): Observable<Upozila> {
    return this.httpClient.post<Upozila>('http://localhost:8080/upozila/save', upozila);
  }

  saveWithRoom(upozila: Upozila): Observable<Upozila> {
    return this.httpClient.post<Upozila>('http://localhost:8080/upozila/save-with-room', upozila);
  }

  update(upozila: Upozila): Observable<Upozila> {
    return this.httpClient.put<Upozila>('http://localhost:8080/upozila/update', upozila);
  }

  delete(upozila: Upozila): Observable<boolean> {
    //console.log(upozila);
    return this.httpClient.delete<boolean>('http://localhost:8080/upozila/delete', {body: upozila})
    //.subscribe((e)=>{ });
  }

  search(upozilaSearchDto: UpozilaSearchDto): Observable<Array<Upozila>> {
    return this.httpClient.post<Array<Upozila>>('http://localhost:8080/upozila/search', upozilaSearchDto);
  }

  searchWithDistrict(upozilaSearchDto: UpozilaSearchDto): Observable<Array<Upozila>> {
    return this.httpClient.post<Array<Upozila>>('http://localhost:8080/upozila/search-with-district', upozilaSearchDto);
  }

  searchWithDistrictWithDivision(upozilaSearchDto: UpozilaSearchDto): Observable<Array<Upozila>> {
    return this.httpClient.post<Array<Upozila>>('http://localhost:8080/upozila/search-with-district-with-division', upozilaSearchDto);
  }

}
