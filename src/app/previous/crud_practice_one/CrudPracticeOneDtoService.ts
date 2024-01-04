import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HorseDto } from "./HorseDto";

@Injectable({
  providedIn: 'root'
})
export class CrudPracticeOneDtoService{

  constructor(private httpClient: HttpClient) { }

  getCrudPracticeOneList(): Observable<Array<HorseDto>> {
    return this.httpClient.get<Array<HorseDto>>("http://localhost:3000/crudPracticeDto");
  }

  saveCrudPracticeOne(horseDto: HorseDto): Observable<HorseDto> {
    return this.httpClient.post<HorseDto>("http://localhost:3000/crudPracticeDto", horseDto);
  }

  deleteCrudPracticeOne(horseDto: HorseDto) {
    this.httpClient.delete<HorseDto>('http://localhost:3000/crudPracticeDto/' + horseDto.id).subscribe();
    console.log("successfully Deleted...");
  }

  updateCrudPracticeOne(horseDto: HorseDto): Observable<HorseDto> {
    return this.httpClient.put<HorseDto>('http://localhost:3000/crudPracticeDto/'
      + horseDto.id, horseDto);
  }


 


}