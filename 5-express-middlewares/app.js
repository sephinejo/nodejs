import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const corsOption = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(cors(corsOption));
app.use(helmet());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  req.cookies.yummy_cookie;
  res.send('Welcome!');
});

app.listen(8080);
