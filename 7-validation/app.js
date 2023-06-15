import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Enter your name')
      .isLength({ min: 2 })
      .withMessage('At least two characters needed'),
    body('age').notEmpty().isInt().withMessage('Enter the number'),
    body('email').isEmail().withMessage('Enter your email').normalizeEmail(),
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [param('email').isEmail().withMessage('Enter your email'), validate],
  (req, res, next) => {
    console.log(req.body);
    res.send('💌');
  }
);

app.listen(8080);
