
const express = require('express');
const router = express.Router();
const pool = require('../db');

// PUBLIC: Submit a new message
router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    res.status(201).json({ status: "Signal_Received", data: newMessage.rows[0] });
  } catch (err) {
    res.status(500).json({ status: "Transmission_Error", error: err.message });
  }
});

// ADMIN: Get messages (already created)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY received_at DESC');
    res.json(result.rows); // This sends the array to your dashboard
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;