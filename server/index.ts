import express from 'express';
import mongoose from 'mongoose';
const keys = require('./keys');

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose.connect(keys.mongoURI, mongoConfig, () => {
  console.log('connected to mongo.');
});
require('./models/User');
require('./services/passport');

require('./middlewares');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on PORT: ${port}`);
});
