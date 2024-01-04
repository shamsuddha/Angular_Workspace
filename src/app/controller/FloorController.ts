import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Floor} from "../entity/Floor";
import {FloorSearchDto} from "../dto/request/FloorSearchDto";

@Injectable({providedIn: 'root'})
export class FloorController {

  constructor(private httpClient: HttpClient,) {
  }

  save(floor: Floor): Observable<Floor> {
    return this.httpClient.post<Floor>('http://localhost:8080/floor/save', floor);
  }

  saveWithRoom(floor: Floor): Observable<Floor> {
    return this.httpClient.post<Floor>('http://localhost:8080/floor/save-with-room', floor);
  }

  update(floor: Floor): Observable<Floor> {
    return this.httpClient.put<Floor>('http://localhost:8080/floor/update', floor);
  }

  delete(floor: Floor): Observable<boolean> {
    //console.log(floor);
    return this.httpClient.delete<boolean>('http://localhost:8080/floor/delete', {body: floor})
    //.subscribe((e)=>{ });
  }

  search(floorSearchDto: FloorSearchDto): Observable<Array<Floor>> {
    return this.httpClient.post<Array<Floor>>('http://localhost:8080/floor/search', floorSearchDto);
  }
}
