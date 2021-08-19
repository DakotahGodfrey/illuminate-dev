import express from 'express';
module.exports = (app: express.Application) => {
  app.get('/api/current-user', (req, res) => {
    if (req.user) {
      res.send(req.user);
    }
    res.send(null);
  });
};
