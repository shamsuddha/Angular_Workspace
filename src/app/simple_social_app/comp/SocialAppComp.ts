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
import { PostSearchDto } from "../dto/request/PostSearchDto";
import { ActivatedRoute } from "@angular/router";
import { currentDateTime } from "../../../util/DateTimeUtil";
import { Post } from 'express_server/entity/Post';

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

  postDtoList: Array<PostDto> = [];
  commentDtoList: Array<CommentDto> = [];
  currentUserId: number | null = null;

  constructor(
    private postDtoApiService: PostDtoApiService,
    private postLikeDtoApiService: PostLikeDtoApiService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((e) => {
      this.currentUserId = +e['userId'];
    })
    this.searchPost();
  }

  savePost() {
    console.log(this.postDtoFg.value);
    const postDto = new PostDto(this.postDtoFg.value)
    postDto.userDto = new UserDto({ id: this.currentUserId, name: "name " + this.currentUserId });
    postDto.createdDateTime = currentDateTime();
    console.log(postDto)
    this.postDtoApiService.savePostDto(postDto)
      .subscribe((e) => {
        this.searchPost();
      });
  }

  postDeleteClicked(postDto: PostDto) {
    //console.log(postDto);
    this.postDtoApiService.deletePostDto(postDto)
  }

  postLikeClicked(postDto: PostDto) {

    // post dto te 

    const postLikeDto = new PostLikeDto()
    postLikeDto.userDto = new UserDto({ id: this.currentUserId, name: "name " + this.currentUserId });
    postLikeDto.postDto = new PostDto(postDto);
    postLikeDto.createdDateTime = currentDateTime();
    this.postLikeDtoApiService.savePostLikeDto(postLikeDto)
      .subscribe((e) => {
        console.log("post liked")
      });
  }

  reset() {
    this.postDtoFg.reset();
  }

  searchPost() {
    this.postDtoApiService.search(new PostSearchDto()).subscribe((e: Array<PostDto>) => {
      this.postDtoList = e;
    })
  }

  latestPost() {

  }

  onShowClick(postDto: PostDto) {
    // console.log(postDto)
    // let singlePost : PostDto = ;
    this.postDtoApiService.search(new PostSearchDto({ userId: 2 }))
      .pipe(
        filter((e: Array<PostDto>) => {
          // console.log(postDto.id);
          if (e.find((t: PostDto) => t.id == postDto.id)) {
            return true;
            //  console.log(e);
          } else {
            return false;
          }
        }),
        tap((e) => console.log(e))
      )
      .subscribe((e: Array<PostDto>) => {
        this.postDtoList = e;
      }
      )
  }
}

