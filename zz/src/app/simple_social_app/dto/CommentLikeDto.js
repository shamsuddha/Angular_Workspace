"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentLikeDto = void 0;
class CommentLikeDto {
    constructor(o) {
        this.id = null;
        this.userDto = null;
        this.commentDto = null;
        this.createdDateTime = null;
        Object.assign(this, o);
    }
}
exports.CommentLikeDto = CommentLikeDto;
