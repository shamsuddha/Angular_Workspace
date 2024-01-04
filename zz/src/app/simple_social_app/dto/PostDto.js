"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDto = void 0;
class PostDto {
    constructor(o) {
        this.id = null;
        this.body = null;
        this.likeCount = null;
        this.postLikeDtoList = [];
        this.userDto = null;
        this.commentDtoList = [];
        this.createdDateTime = null; // yyyy-MM-dd HH:mm:ss
        Object.assign(this, o);
    }
}
exports.PostDto = PostDto;
