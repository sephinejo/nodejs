import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // REST API -> Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
const options = {
  dotfiles: 'ignore', // hidden hile
  etag: false,
  index: false,
  maxAge: '1d', // cache
  redirec: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now()); // add to header
  },
};
app.use(express.static('public', options));

app.use('/posts', postRouter);
app.use('/users', userRouter);

// app
//   .route('/posts')
//   .get((req, res, next) => {
//     res.status(201).send('GET: /posts');
//   })
//   .post((req, res) => {
//     res.status(201).send('POST: /posts');
//   });

// app
//   .route('/posts/:id')
//   .put((req, res) => {
//     res.status(201).send('PUT: /posts/:id');
//   })
//   .delete((req, res) => {
//     res.status(201).send('DELETE: /posts/:id');
//   });

app.listen(8080);
