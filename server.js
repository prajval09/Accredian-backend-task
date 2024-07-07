const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const referrals = require('./referrals');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', referrals);

app.use((err, req, res, next) => {
  console.error(err.stack); // Add detailed logging
  res.status(500).json({ error: 'Internal Server Error' });
});

app.get('/test-db', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.send('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).send('Database connection failed');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
