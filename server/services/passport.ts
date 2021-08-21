const GithubStrategy = require('passport-github2');
import passport from 'passport';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const keys = require('../keys');
const User = mongoose.model('users');

const ghOptions = {
  clientID: keys.ghClient,
  clientSecret: keys.ghSecret,
  callbackURL: keys.ghCallback,
  proxy: true,
};

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GithubStrategy(
    ghOptions,
    async (accessToken: string, refreshToken: any, profile: any, done: any) => {
      const existingUser = await User.findOne({ id: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        id: profile.id,
        username: profile.username,
        ghToken: accessToken,
        ghID: profile.nodeId,
      }).save();
      return done(null, user);
    }
  )
);
