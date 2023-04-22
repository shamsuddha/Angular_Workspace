import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Datastore from 'nedb';
import {PostSearchDto} from "./dto/request/PostSearchDto";
import {UserSearchDto} from "./dto/request/UserSearchDto";
import {CommentSearchDto} from "./dto/request/CommentSearchDto";
import {CommentDto} from "./dto/CommentDto";

const userTable = new Datastore({filename: 'db/user.db', autoload: true});
const postTable = new Datastore({filename: 'db/post.db', autoload: true});
const commentTable = new Datastore({filename: 'db/comment.db', autoload: true});

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.post('/user/save', (req, res) => {
  userTable.insert(req.body, (err, newDoc) => {
    res.json(newDoc)
  });
});

app.post('/user/search', (req, res) => {
  const userSearchDto: UserSearchDto = new UserSearchDto(req.body)
  let predicate = {};
  if (userSearchDto.idList.length > 0) {
    predicate = {...predicate, id: {$in: userSearchDto.idList}};
  }
  userTable.find(predicate, (err, docs) => {
    res.json(docs)
  });
});


app.post('/post/save', (req, res) => {
  postTable.insert(req.body, (err, newDoc) => {
    res.json(newDoc)
  });
});

app.post('/post/search', (req, res) => {
  const postSearchDto: PostSearchDto = new PostSearchDto(req.body);
  let predicate = {};
  if (postSearchDto.idList.length > 0) {
    predicate = {...predicate, id: {$in: postSearchDto.idList}};
  }
  if (postSearchDto.userId) {
    predicate = {...predicate, "userDto.id": req.body['userId']};
  }
  postTable.find(predicate, (err, docs) => {
    res.json(docs);
  });
});

app.post('/comment/save', (req, res) => {
  const commentDto: CommentDto = new CommentDto(req.body);

  commentTable.find({}).sort({id: -1})
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

  const commentSearchDto: CommentSearchDto = new CommentSearchDto(req.body);
  let predicate = {};
  if (commentSearchDto.idList.length > 0) {
    predicate = {...predicate, id: {$in: commentSearchDto.idList}};
  }
  if (commentSearchDto.postId) {
    predicate = {...predicate, "userDto.id": req.body['userId']};
  }
  commentTable.find({id: {$in: req.body['idList']}}, (err, docs) => {
    res.json(docs)
  });
})


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
