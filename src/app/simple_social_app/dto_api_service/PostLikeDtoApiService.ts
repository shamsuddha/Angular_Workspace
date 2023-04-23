import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { PostLikeDto } from "../dto/PostLikeDto";
@Injectable({
  providedIn: 'root'
})
export class PostLikeDtoApiService {

  constructor(private httpClient: HttpClient) { }

  savePostLikeDto(postLikeDto: PostLikeDto): Observable<PostLikeDto> {
   
    return this.httpClient.post<PostLikeDto>("http://localhost:7001/postLike/save", postLikeDto);
  }

}
