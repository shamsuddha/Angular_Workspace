"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(o) {
        this.id = null;
        this.name = null;
        this.postDtoList = [];
        Object.assign(this, o);
    }
}
exports.UserDto = UserDto;
