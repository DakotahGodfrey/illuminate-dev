import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';

module.exports = (app: express.Application) => {
  app.use(express.json());
  app.use(
    cors({ origin: 'https://illuminate-dev.netlify.app/', credentials: true })
  );
  app.set('trust proxy', 1);
  app.use(
    session({
      secret: 'secretCode',
      resave: true,
      saveUninitialized: true,
      // cookie: {
      //   // sameSite: 'none',
      //   secure: true,
      //   maxAge: 1000 * 60 * 60 * 24 * 7,
      // },
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
