const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('github', { scope: ['repo'] }));
router.get(
  '/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
