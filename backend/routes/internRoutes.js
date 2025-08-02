const express = require('express');
const router = express.Router();
const data = require('../data/dummyData.json');

// GET Intern Info
router.get('/intern', (req, res) => {
  try {
    const { name, referralCode, donationsRaised } = data;
    res.json({ name, referralCode, donationsRaised });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch intern data' });
  }
});

// GET Leaderboard
router.get('/leaderboard', (req, res) => {
  try {
    res.json(data.leaderboard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;
