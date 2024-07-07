// src/routes/referrals.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();


router.post('/referrals', async (req, res) => {
  console.log("request hit");
  const { name, email, friendName, friendEmail } = req.body;
  if (!name || !email || !friendName || !friendEmail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: { name, email, friendName, friendEmail },
    });
    res.status(201).json(newReferral);
  } catch (error) {
    res.status(500).json({ error: 'Error creating referral' });
  }
});

module.exports = router;
