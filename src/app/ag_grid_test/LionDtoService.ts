import { PersonComp } from '../person/PersonComp';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LionDto } from "./LionDto";

@Injectable({
  providedIn: 'root'
})
export class LionDtoService {

  constructor(private httpClient: HttpClient) { }

  getLionList(): Observable<Array<LionDto>> {
    return this.httpClient.get<Array<LionDto>>("http://localhost:3000/lion");
  }

  saveLion(lionDto: LionDto): Observable<LionDto> {
    return this.httpClient.post<LionDto>("http://localhost:3000/lion", lionDto);
  }

  deleteLion(lionDto: LionDto) {
    this.httpClient.delete<LionDto>('http://localhost:3000/lion/' + lionDto.id).subscribe();
    console.log("successfully Deleted...");
  }

  updateLion(lionDto: LionDto): Observable<LionDto> {
    return this.httpClient.put<LionDto>('http://localhost:3000/lion/'
      + lionDto.id, lionDto);
  }


 


 

  

}



