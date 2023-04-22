"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
class Comment {
    /*createdAt
    createdBy
    updatedAt
    updatedBy*/
    constructor(o) {
        this.id = null;
        this.body = null;
        Object.assign(this, o);
    }
}
exports.Comment = Comment;
