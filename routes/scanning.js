// src/routes/scanning.js
const express = require('express');
const router = express.Router();
const { processScan } = require('../api/scanningSystem');

router.get('/', (req, res) => {
  res.render('scanning', { title: 'Scanning System' });
});

router.post('/process', async (req, res) => {
  const scanData = req.body;
  const result = await processScan(scanData);
  res.json(result);
});

module.exports = router;
