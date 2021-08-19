import express from 'express';
import mongoose from 'mongoose';
const keys = require('./keys');
const app = express();

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

require('./middlewares')(app);

app.get('/', (req, res) => res.send({ greeting: 'hello world' }));

require('./routes/auth')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on PORT: ${port}`);
});
