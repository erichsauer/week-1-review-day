const express = require('express');
const app = express();

type UserProfile = {
  id?: string;
  name: string;
  character: string;
  quote?: string;
};

app.use(express.json());

app.use('/api/v1/profiles', require('./controllers/profiles'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
