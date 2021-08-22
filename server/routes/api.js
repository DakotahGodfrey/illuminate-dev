const express = require('express');
const axios = require('axios');
const router = express.Router();
const API_URL = 'https://api.github.com/graphql';

router.post('/create-repo', async (req, res) => {
  console.log(req.user);
  console.log(req.body);
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

  if (response.errors) {
    res.status(403).send({
      error:
        'attempt failed please check that the repo does not already exist.',
    });
  } else {
    res.status(201).send(response.data);
  }
});

module.exports = router;
