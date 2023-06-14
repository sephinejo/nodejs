import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file', (req, res) => {
  fs.readFile('/file1.txt', (err, data) => {
    // async
    if (err) {
      res.sendStatus(404); // good
    }
  });
});

app.get('/file1', (req, res) => {
  // const data = fs.readFileSync('/file1.txt'); // sync
  // res.send(data); // bad
  try {
    const data = fs.readFileSync('/file1.txt');
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get('/file2', (req, res) => {
  return fsAsync // async promise -> return OR async
    .readFile('/file2.txt')
    .then((data) => res.send(data));
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file2.txt'); // sync-like async
  res.send(data);
});

app.use((error, req, res, next) => {
  // error handler
  console.error(error);
  res.status(500).json({ message: 'Something went wrong!' });
});
app.listen(8080);

// express5 - async(O) promise(X)
