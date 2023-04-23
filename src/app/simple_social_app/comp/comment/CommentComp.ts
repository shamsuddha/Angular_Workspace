import { CommentLikeDtoApiService } from './../../dto_api_service/CommentLikeDtoApiService';
import { Component, Input, OnInit } from "@angular/core";
import { CommentDtoApiService } from "../../dto_api_service/CommentDtoApiService";
import { CommentSearchDto } from "../../dto/request/CommentSearchDto";
import { CommentDto } from "../../dto/CommentDto";
import { FormControl, FormGroup } from "@angular/forms";
import { UserDto } from "../../../../../express_server/dto/UserDto";
import { PostDto } from '../../dto/PostDto';
import { CommentLikeDto } from '../../dto/CommentLikeDto';

@Component({
  selector: 'CommentComp',
  templateUrl: './CommentComp.html',
  styleUrls: ['./CommentComp.scss'],
})

export class CommentComp implements OnInit {

  @Input() postDto!: PostDto;
  commentDtoList!: Array<CommentDto>;
  currentUserId: number | null = null;

  commentDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    body: new FormControl<string | null>(null),
  })

  constructor(
    private commentDtoApiService: CommentDtoApiService,
    private commentLikeDtoApiService: CommentLikeDtoApiService,

  ) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.commentDtoApiService.search(new CommentSearchDto({ postId: this.postDto.id }))
      .subscribe((e: Array<CommentDto>) => {
        this.commentDtoList = e;
      });
  }

  saveComment() {
    const commentDto: CommentDto = new CommentDto(this.commentDtoFg.value);
    commentDto.userDto = new UserDto({ id: 2, name: "name 2" });
    commentDto.postDto = this.postDto;
    this.commentDtoApiService.save(commentDto).subscribe(e => {
      this.search();
    });

  }

  onCommentLikeClick(commentDto: CommentDto) {

    const commentLikeDto: CommentLikeDto = new CommentLikeDto()
    commentLikeDto.userDto = new UserDto({ id: this.currentUserId, name: "name " + this.currentUserId });

    console.log(commentLikeDto.userDto);

     commentLikeDto.commentDto = commentDto;

    this.commentLikeDtoApiService.saveCommentLikeDto(commentLikeDto)
      .subscribe((e) => {
        console.log("Comment liked")
      });

  }

}
