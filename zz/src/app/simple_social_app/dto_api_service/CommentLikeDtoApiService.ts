import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { CommentLikeDto } from "../dto/CommentLikeDto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentLikeDtoApiService {

  constructor(private httpClient: HttpClient) { }

  saveCommentLikeDto(commentLikeDto: CommentLikeDto): Observable<CommentLikeDto> {
   
    return this.httpClient.post<CommentLikeDto>("http://localhost:7001/commentLike/save", commentLikeDto);
  }
}
