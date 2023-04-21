import express, {Express} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Datastore from 'nedb';
import {PostSearchDto} from "./dto/request/PostSearchDto";

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
  userTable.find({id: {$in: req.body['idList']}}, (err, docs) => {
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
    predicate = {...predicate, id: {$in: req.body['idList']}};
  }
  if (req.body['userId']) {
    predicate = {...predicate, "userDto.id": req.body['userId']};
  }
  postTable.find(predicate, (err, docs) => {
    res.json(docs);
  });
});

app.post('/comment/save', (req, res) => {
  commentTable.insert(req.body, (err, newDoc) => {
    res.json(newDoc);
  });
});

app.post('/comment/search', (req, res) => {
  console.log(req.body)
  commentTable.find({id: {$in: req.body['idList']}}, (err, docs) => {
    res.json(docs)
  });
})


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
