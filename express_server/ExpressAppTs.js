"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostDto_1 = require("./../src/app/simple_social_app/dto/PostDto");
const PostLikeDto_1 = require("./../src/app/simple_social_app/dto/PostLikeDto");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const nedb_1 = __importDefault(require("nedb"));
const PostSearchDto_1 = require("./dto/request/PostSearchDto");
const UserSearchDto_1 = require("./dto/request/UserSearchDto");
const CommentSearchDto_1 = require("./dto/request/CommentSearchDto");
const CommentDto_1 = require("./dto/CommentDto");
const CommentLikeDto_1 = require("./dto/CommentLikeDto");
const userTable = new nedb_1.default({ filename: 'db/user.db', autoload: true });
const postTable = new nedb_1.default({ filename: 'db/post.db', autoload: true });
const commentTable = new nedb_1.default({ filename: 'db/comment.db', autoload: true });
const postLikeTable = new nedb_1.default({ filename: 'db/postLike.db', autoload: true });
const commentLikeTable = new nedb_1.default({ filename: 'db/commentLike.db', autoload: true });
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/user/save', (req, res) => {
    userTable.insert(req.body, (err, newDoc) => {
        res.json(newDoc);
    });
});
app.post('/user/search', (req, res) => {
    const userSearchDto = new UserSearchDto_1.UserSearchDto(req.body);
    let predicate = {};
    if (userSearchDto.idList.length > 0) {
        predicate = Object.assign(Object.assign({}, predicate), { id: { $in: userSearchDto.idList } });
    }
    userTable.find(predicate, (err, docs) => {
        res.json(docs);
    });
});
app.post('/post/save', (req, res) => {
    const postDto = new PostDto_1.PostDto(req.body);
    postTable.find({}).sort({ id: -1 })
        .exec((err, docs) => {
        if (docs && docs.length > 0) {
            postDto.id = docs[0]['id'] + 1;
            postTable.insert(postDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
        else {
            postDto.id = 1;
            postTable.insert(postDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
    });
});
app.post('/post/search', (req, res) => {
    const postSearchDto = new PostSearchDto_1.PostSearchDto(req.body);
    let predicate = {};
    if (postSearchDto.idList.length > 0) {
        predicate = Object.assign(Object.assign({}, predicate), { id: { $in: postSearchDto.idList } });
    }
    if (postSearchDto.userId) {
        predicate = Object.assign(Object.assign({}, predicate), { "userDto.id": req.body['userId'] });
    }
    postTable.find(predicate, (err, docs) => {
        res.json(docs);
    });
});
app.post('/comment/save', (req, res) => {
    const commentDto = new CommentDto_1.CommentDto(req.body);
    commentTable.find({}).sort({ id: -1 })
        .exec((err, docs) => {
        if (docs && docs.length > 0) {
            commentDto.id = docs[0]['id'] + 1;
            commentTable.insert(commentDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
        else {
            commentDto.id = 1;
            commentTable.insert(commentDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
    });
});
app.post('/comment/search', (req, res) => {
    const commentSearchDto = new CommentSearchDto_1.CommentSearchDto(req.body);
    let predicate = {};
    if (commentSearchDto.idList.length > 0) {
        predicate = Object.assign(Object.assign({}, predicate), { id: { $in: commentSearchDto.idList } });
    }
    if (commentSearchDto.postId) {
        predicate = Object.assign(Object.assign({}, predicate), { "postDto.id": commentSearchDto.postId });
    }
    commentTable.find(predicate, (err, docs) => {
        res.json(docs);
    });
});
app.post('/postLike/save', (req, res) => {
    const postLikeDto = new PostLikeDto_1.PostLikeDto(req.body);
    postLikeTable.find({}).sort({ id: -1 })
        .exec((err, docs) => {
        if (docs && docs.length > 0) {
            postLikeDto.id = docs[0]['id'] + 1;
            postLikeTable.insert(postLikeDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
        else {
            postLikeDto.id = 1;
            postLikeTable.insert(postLikeDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
    });
    // Post table theke like count cont column e +1 dite hobe tar jonno
    // req. body te jei post dto ashbe tar id er sathe post table er id match kore oita akta variable er moddhe nite hobe
    // oi post er like count column er value +1 korte hobe.
});
app.post('/commentLike/save', (req, res) => {
    console.log("hello world");
    const commentLikeDto = new CommentLikeDto_1.CommentLikeDto(req.body);
    commentLikeTable.find({}).sort({ id: -1 })
        .exec((err, docs) => {
        if (docs && docs.length > 0) {
            commentLikeDto.id = docs[0]['id'] + 1;
            commentLikeTable.insert(commentLikeDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
        else {
            commentLikeDto.id = 1;
            commentLikeTable.insert(commentLikeDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
    });
});
app.post('/commentLike/save', (req, res) => {
    console.log("hello world");
    const commentLikeDto = new CommentLikeDto_1.CommentLikeDto(req.body);
    commentLikeTable.find({}).sort({ id: -1 })
        .exec((err, docs) => {
        if (docs && docs.length > 0) {
            commentLikeDto.id = docs[0]['id'] + 1;
            commentLikeTable.insert(commentLikeDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
        else {
            commentLikeDto.id = 1;
            commentLikeTable.insert(commentLikeDto, (err, newDoc) => {
                res.json(newDoc);
            });
        }
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
