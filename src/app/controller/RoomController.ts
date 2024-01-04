import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Room } from "../entity/Room";
import { RoomSearchDto } from "../dto/request/RoomSearchDto";

@Injectable({ providedIn: 'root' })
export class RoomController {

  constructor(private httpClient: HttpClient,) { }

  save(room: Room): Observable<Room> {
    return this.httpClient.post<Room>('http://localhost:8080/room/save', room);
  }

  update(room: Room): Observable<Room> {
    return this.httpClient.put<Room>('http://localhost:8080/room/update', room);
  }

  delete(room: Room): Observable<boolean> {
    //console.log(room);
    return this.httpClient.delete<boolean>('http://localhost:8080/room/delete', { body: room })
    //.subscribe((e)=>{ });
  }

  search(roomSearchDto: RoomSearchDto): Observable<Array<Room>> {
    return this.httpClient.post<Array<Room>>('http://localhost:8080/room/search', roomSearchDto);
  }

  searchWithFloor(): Observable<Array<Room>> {
    return this.httpClient.post<Array<Room>>('http://localhost:8080/room/search-with-floor', {});
  }
}
