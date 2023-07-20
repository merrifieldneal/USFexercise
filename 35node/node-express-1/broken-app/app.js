const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON in the request body
app.use(express.json())

app.post('/', async function (req, res, next) {
  try {
    const developers = req.body.developers;
    const results = await Promise.all(
      developers.map(async d => {
        return await axios.get(`https://api.github.com/users/${d}`);
      })
    );

    const out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
