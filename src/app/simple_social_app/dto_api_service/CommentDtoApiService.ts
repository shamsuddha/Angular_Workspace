import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CommentSearchDto} from "../dto/request/CommentSearchDto";
import {CommentDto} from "../dto/CommentDto";

@Injectable({
  providedIn: 'root'
})
export class CommentDtoApiService {

  constructor(private httpClient: HttpClient) {
  }

  save(commentDto: CommentDto): Observable<CommentDto> {
    return this.httpClient.post<CommentDto>("http://localhost:7001/comment/save", commentDto);
  }

  search(commentSearchDto: CommentSearchDto): Observable<Array<CommentDto>> {
    return this.httpClient.post<Array<CommentDto>>("http://localhost:7001/comment/search", commentSearchDto);
  }

}
