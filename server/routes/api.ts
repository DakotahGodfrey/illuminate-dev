import express from 'express';
module.exports = (app: express.Application) => {
  app.get('/api/current-user', (req, res) => {
    console.log(req.user);
    if (!req.user) {
      res.send({ error: 'no user found' });
    }
    res.send(req.user);
  });
};
