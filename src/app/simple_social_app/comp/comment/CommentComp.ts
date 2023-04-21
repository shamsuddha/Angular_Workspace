import {Component, Input, OnInit} from "@angular/core";
import {PostDto} from "../../dto/PostDto";
import {CommentDtoApiService} from "../../dto_api_service/CommentDtoApiService";
import {CommentSearchDto} from "../../dto/request/CommentSearchDto";

@Component({
  selector: 'CommentComp',
  templateUrl: './CommentComp.html',
  styleUrls: ['./CommentComp.scss'],
})
export class CommentComp implements OnInit {
saveComment() {
throw new Error('Method not implemented.');
}

  @Input() postDto!: PostDto;

  constructor(private commentDtoApiService:CommentDtoApiService) {

  }

  ngOnInit(): void {
    this.commentDtoApiService.search(new CommentSearchDto({idList: []}));
  }

}
