import { PostLikeDtoApiService } from './../dto_api_service/PostLikeDtoApiService';
import { tap } from 'rxjs';
import { filter } from 'rxjs';
import { PostDto } from './../dto/PostDto';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostDtoApiService } from "../dto_api_service/PostDtoApiService";
import { HttpClient } from "@angular/common/http";
import { UserDto } from '../dto/UserDto';
import { CommentDto } from '../dto/CommentDto';
import { PostLikeDto } from '../dto/PostLikeDto';


@Component({
  selector: 'SocialAppComp',
  templateUrl: './SocialAppComp.html',
  styleUrls: ['./SocialAppComp.scss'],
  //standalone: true
})

export class SocialAppComp implements OnInit {

  postDtoFg = new FormGroup({
    body: new FormControl<string | null>(null, [Validators.required,
    Validators.maxLength(300), Validators.minLength(3)]),
  });
  commentDtoFg = new FormGroup({
    body: new FormControl<string | null>(null),
  })
  postDtoList: Array<PostDto> = [];
  commentDtoList: Array<CommentDto> = [];

  constructor(
    private postDtoApiService: PostDtoApiService,
    private postLikeDtoApiService: PostLikeDtoApiService,
    private http: HttpClient) {
  }
  ngOnInit() {
    this.searchPost();
  }

  savePost() {
    console.log(this.postDtoFg.value);
    const postDto = new PostDto(this.postDtoFg.value)
    postDto.userDto = new UserDto({ id: 2, name: "name 2" });
    this.postDtoApiService.savePostDto(postDto)
      .subscribe((e) => {
        this.searchPost();
      });
  }

  postLikeClicked(postDto:PostDto) {
    const postLikeDto = new PostLikeDto()
    postLikeDto.userDto = new UserDto({ id: 2, name: "name 2" });
    postLikeDto.postDto = new PostDto(postDto);
    this.postLikeDtoApiService.savePostLikeDto(postLikeDto)




    .subscribe((e) => {
     console.log("post liked")
    });

  }

  reset() {
    this.postDtoFg.reset();
  }

  searchPost() {
    this.postDtoApiService.getPostDtoList().subscribe((e: Array<PostDto>) => {
      this.postDtoList = e;
    })
  }

  latestPost() {

  }

  onShowClick(postDto: PostDto) {
    // console.log(postDto)
   // let singlePost : PostDto = ;
    this.postDtoApiService.getPostDtoList()
      .pipe(
        filter((e: Array<PostDto>) => {
         // console.log(postDto.id);
          if (e.find((t: PostDto) => t.id == postDto.id)) {
            return true; 
             //  console.log(e);
          }
          else {
            return false;
          }
        }),
        tap((e)=> console.log(e))
      )
      .subscribe((e: Array<PostDto>) => {
        this.postDtoList = e;

      }
)}
}

