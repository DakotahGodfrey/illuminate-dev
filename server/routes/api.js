const express = require('express');
const axios = require('axios');
const router = express.Router();
const API_URL = 'https://api.github.com/graphql';

router.get('/current-user', (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.send(req.user);
  } else {
    res.status(404).send({ message: 'no user logged in' });
    res.redirect('/auth');
  }
});

router.post('/create-repo', async (req, res) => {
  const { ghID, accessToken } = req.user;
  if (!req.user) {
    res.status(403).send({ error: 'please login' });
    res.redirect('/auth');
  }
  if (!req.body || !req.body.name) {
    res.status(403).send({
      error:
        'request body cannot be empty, please supply a title for the new repo.',
    });
  }
  const response = await axios.post(
    API_URL,
    {
      query: ` mutation CreateRepositoryPayload {
        createRepository(input: {
            name: "${req.body.name}"
            ownerId: "${ghID}"
            visibility: PRIVATE
        }){
            repository{
                name
            }
        }
    }`,
    },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  if (response.data.errors) {
    res.status(403).send({
      error:
        'attempt failed please check that the repo does not already exist.',
    });
  } else {
    res.status(201).send(response.data);
  }
});

module.exports = router;
