const express = require('express');
const router = express.Router();
const pool = require('../db');
const jwt = require('jsonwebtoken');

// POST: Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
    if (user.rows.length === 0) return res.status(401).json({ message: "Invalid Identity" });

    // For now, simple check. Later: bcrypt.compare(password, user.rows[0].password_hash)
    if (password !== user.rows[0].password_hash) {
      return res.status(401).json({ message: "Access Denied" });
    }

    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;