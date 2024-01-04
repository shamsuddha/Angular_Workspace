import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { District } from "../entity/District";
import { DistrictSearchDto } from "../dto/request/DisctrictSearchDto";

@Injectable({ providedIn: 'root' })
export class DistrictController {
 

  constructor(private httpClient: HttpClient,) {
  }

  save(district: District): Observable<District> {
    return this.httpClient.post<District>('http://localhost:8080/district/save', district);
  }

  saveWithUpozila(district: District): Observable<District> {
    return this.httpClient.post<District>('http://localhost:8080/district/save-with-upozila', district);
  }

  update(district: District): Observable<District> {
    return this.httpClient.put<District>('http://localhost:8080/district/update', district);
  }

  delete(district: District): Observable<boolean> {
    //console.log(district);
    return this.httpClient.delete<boolean>('http://localhost:8080/district/delete', { body: district })
    //.subscribe((e)=>{ });
  }

  search(districtSearchDto: DistrictSearchDto): Observable<Array<District>> {
    return this.httpClient.post<Array<District>>('http://localhost:8080/district/search', districtSearchDto);
  }

  searchWithDivision() {
    return this.httpClient.post<Array<District>>('http://localhost:8080/district/search-with-division', {});
  }
}