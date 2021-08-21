import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';

module.exports = (app: express.Application) => {
  app.use(express.json());
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.set('trust proxy', 1);
  app.use(
    session({
      secret: 'secretCode',
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
