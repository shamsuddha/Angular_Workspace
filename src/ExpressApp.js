import express from 'express';
import cors from 'cors';
import Datastore from 'nedb'

const userTable = new Datastore({filename: 'user.db', autoload: true});
const postTable = new Datastore({filename: 'post.db', autoload: true});
const commentTable = new Datastore({filename: 'comment.db', autoload: true});
const app = express();

app.use(express.json());
app.use(cors());


const port = 7000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
