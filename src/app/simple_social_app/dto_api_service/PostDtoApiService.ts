import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserDto} from "../dto/UserDto";
import {PostDto} from "../dto/PostDto";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PostDtoApiService {

  constructor(private httpClient: HttpClient) { }

  getPostDtoList(): Observable<Array<PostDto>> {
    return this.httpClient.get<Array<PostDto>>("http://localhost:3000/post");
  }

  savePostDto(postDto: PostDto): Observable<PostDto> {
   
    return this.httpClient.post<PostDto>("http://localhost:3000/post", postDto);
  }

  deletePostDto(postDto: PostDto) {
    this.httpClient.delete<PostDto>('http://localhost:3000/post/' + postDto.id).subscribe();
    console.log("successfully Deleted...");
  }

  updatePostDto(postDto: PostDto): Observable<PostDto> {
    return this.httpClient.put<PostDto>('http://localhost:3000/post/'
      + postDto.id, postDto);
  }



  // save():Observable<PostDto>{
  //   return new Observable(e=>{
  //     e.next(
  //       new PostDto({id:1,body:"name 1"}),
  //     )
  //   })
  // }


  // search():Observable<Array<PostDto>>{
  //   return new Observable(e=>{
  //     e.next([
  //       new PostDto({id:1,body:"name 1"}),
  //       new PostDto({id:1,body:"name 1"}),
  //       new PostDto({id:1,body:"name 1"}),
  //     ])
  //   })
  // }








}
