import axios from 'axios';
import express from 'express';
module.exports = (app: express.Application) => {
  app.get('/api/current-user', (req, res) => {
    console.log(req.user);
    if (!req.user) {
      res.send({ error: 'no user found' });
    }
    res.send(req.user);
  });
  app.post('/api/create-repo', async (req, res) => {
    if (!req.user) {
      res.send({
        error: 'no user found',
      });
    }

    const { name, description } = req.body;
    const response = await axios.post(
      'https://api.github.com/graphql',
      {
        query: ` mutation CreateRepositoryPayload {
        createRepository(input: {
            name: "${name}"
            ownerId: "MDQ6VXNlcjc4OTMzMzM5" 
            visibility: PRIVATE
        }){
            repository{
                name
                description
                id
            }
        }
    }`,
      },
      // @ts-ignore
      { headers: { Authorization: `Bearer ${req.user.ghToken}` } }
    );
    console.log(response.data);
    res.send('repo created');
  });
};
// "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;"
// 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;
