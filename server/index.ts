import express from 'express';
import mongoose from 'mongoose';
const keys = require('./keys');
const app = express();
const path = require('path');

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

require('./routes/auth')(app);
require('./routes/api')(app);

if (process.env.NODE_ENV === 'production') {
  // allow express to serve up production assets.
  app.use(express.static('../../client/build'));
  // express can also serve up index.html if the route is unhandled
  require('path');
  console.log(path);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on PORT: ${port}`);
});
