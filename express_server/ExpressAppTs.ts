import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Datastore from 'nedb';

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
  console.log(req.body)
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
  let predicate = {};
  /*if (req.body['idList'] && req.body['idList'] !== []) {
    predicate = {...predicate, id: {$in: req.body['idList']}};
  }*/
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
