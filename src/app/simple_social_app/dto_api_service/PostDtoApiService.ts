import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PostDto} from "../dto/PostDto";
import {HttpClient} from "@angular/common/http";
import {PostSearchDto} from "../dto/request/PostSearchDto";


@Injectable({
  providedIn: 'root'
})
export class PostDtoApiService {

  constructor(private httpClient: HttpClient) { }

  savePostDto(postDto: PostDto): Observable<PostDto> {
    return this.httpClient.post<PostDto>("http://localhost:7000/post", postDto);
  }

  updatePostDto(postDto: PostDto): Observable<PostDto> {
    return this.httpClient.put<PostDto>('http://localhost:7000/post/'
      + postDto.id, postDto);
  }

  deletePostDto(postDto: PostDto) {
    this.httpClient.delete<PostDto>('http://localhost:7000/post/' + postDto.id).subscribe();
    console.log("successfully Deleted...");
  }

  search(postSearchDto:PostSearchDto): Observable<Array<PostDto>> {
    return this.httpClient.post<Array<PostDto>>("http://localhost:7000/post/search",postSearchDto);
  }

}
