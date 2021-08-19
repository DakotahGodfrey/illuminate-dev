import express from 'express';
module.exports = (app: express.Application) => {
  app.get('/api/current-user', (req, res) => {
    console.log(req.user);
    if (!req.user) {
      res.send('no user');
    }
    res.send(req.user);
  });
};
