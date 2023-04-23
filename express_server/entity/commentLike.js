"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLike = void 0;
class PostLike {
    constructor(o) {
        this.id = null;
        this.userDto = null;
        this.postDto = null;
        this.createdDateTime = null;
        Object.assign(this, o);
    }
}
exports.PostLike = PostLike;
