// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const referralRoutes = require('./referrals');
app.use(cors());

app.use(bodyParser.json());
app.use('/api', referralRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
