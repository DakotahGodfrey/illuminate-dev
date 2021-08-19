import express from 'express';
import passport from 'passport';

module.exports = (app: express.Application) => {
  app.get('/auth', passport.authenticate('github', { scope: ['repo'] }));

  app.get(
    '/auth/callback',
    passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/auth',
    })
  );

  app.get('/auth/logout', (req, res) => {
    if (!req.user) {
      res.redirect('/');
      return;
    } else {
      req.logout();
      res.redirect('/');
    }
  });
};
