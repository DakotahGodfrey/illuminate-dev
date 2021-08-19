import express from 'express';
const keys = require('./keys');

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on PORT: ${port}`);
});
