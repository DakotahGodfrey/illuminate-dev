const GithubStrategy = require('passport-github2');
const passport = require('passport');
const keys = require('../keys');
const User = require('../models/User');

const ghOptions = {
  clientID: keys.client_id,
  clientSecret: keys.client_secret,
  callbackURL: '/auth/callback',
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    ghOptions,
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ ghID: profile.nodeId });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        ghID: profile.nodeId,
        displayName: profile.displayName,
        avatar: profile.photos[0].value,
        accessToken: accessToken,
      }).save();
      return done(null, user);
    }
  )
);
