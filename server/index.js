const express = require('express');
const connectDB = require('./services/db');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const keys = require('./keys');
require('./services/passport');
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  session({
    secret: 'kgjslfkjdflsjdflksdfgjdfg',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: keys.mongo_uri,
    }),
  })
);
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
