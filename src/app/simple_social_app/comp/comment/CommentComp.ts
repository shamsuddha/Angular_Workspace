import {Component, Input, OnInit} from "@angular/core";
import {PostDto} from "../../dto/PostDto";
import {CommentDtoApiService} from "../../dto_api_service/CommentDtoApiService";
import {CommentSearchDto} from "../../dto/request/CommentSearchDto";
import {CommentDto} from "../../dto/CommentDto";
import {FormControl, FormGroup} from "@angular/forms";
import {UserDto} from "../../../../../express_server/dto/UserDto";

@Component({
  selector: 'CommentComp',
  templateUrl: './CommentComp.html',
  styleUrls: ['./CommentComp.scss'],
})
export class CommentComp implements OnInit {

  @Input() postDto!: PostDto;
  commentDtoList!: Array<CommentDto>;

  commentDtoFg = new FormGroup({
    id: new FormControl<number | null>(null),
    body: new FormControl<string | null>(null),
  })

  constructor(private commentDtoApiService: CommentDtoApiService) {
  }

  ngOnInit(): void {
    this.commentDtoApiService.search(new CommentSearchDto({idList: []}));
  }

  saveComment() {
    const commentDto: CommentDto = new CommentDto(this.commentDtoFg.value);
    commentDto.userDto = new UserDto({id: 2, name: "name 2"});
    commentDto.postDto = this.postDto;
    this.commentDtoApiService.save(commentDto).subscribe(e => e);
  }

}
