"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLikeDto = void 0;
class PostLikeDto {
    constructor(o) {
        this.id = null;
        this.userDto = null;
        this.postDto = null;
        this.createdDateTime = null;
        Object.assign(this, o);
    }
}
exports.PostLikeDto = PostLikeDto;
