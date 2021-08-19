'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var mongoose_1 = __importDefault(require('mongoose'));
var keys = require('./keys');
var app = express_1.default();
var path = require('path');
var mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose_1.default.connect(keys.mongoURI, mongoConfig, function () {
  console.log('connected to mongo.');
});
require('./models/User');
require('./services/passport');
require('./middlewares')(app);
require('./routes/auth')(app);
require('./routes/api')(app);

if (process.env.NODE_ENV === 'production') {
  // allow express to serve up production assets.
  app.use(express_1.default.static(path.join(__dirname, '../../client/build')));
  // express can also serve up index.html if the route is unhandled
  require('path');
  console.log(path);
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('listening on PORT: ' + port);
});
