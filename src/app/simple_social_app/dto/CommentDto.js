"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDto = void 0;
class CommentDto {
    constructor(o) {
        this.id = null;
        this.body = null;
        this.likeCount = null;
        this.commentLikeDtoList = [];
        this.userDto = null;
        this.postDto = null;
        this.commentDtoList = [];
        this.createdDateTime = null;
        Object.assign(this, o);
    }
}
exports.CommentDto = CommentDto;
