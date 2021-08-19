'use strict';
exports.__esModule = true;
var express_1 = require('express');
var mongoose_1 = require('mongoose');
var keys = require('./keys');
var app = express_1['default']();
var mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose_1['default'].connect(keys.mongoURI, mongoConfig, function () {
  console.log('connected to mongo.');
});
require('./models/User');
require('./services/passport');
require('./middlewares')(app);

require('./routes/auth')(app);
require('./routes/api')(app);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('listening on PORT: ' + port);
});
