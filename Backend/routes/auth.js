const express = require('express');
const router = express.Router();
const pool = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // 1. Add this import

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
    
    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Invalid Identity" });
    }

    // 2. Use bcrypt to compare the plain password with the hashed one
    const isMatch = await bcrypt.compare(password, user.rows[0].password_hash);
    
    if (!isMatch) {
      return res.status(401).json({ message: "Access Denied" });
    }

    const token = jwt.sign(
      { id: user.rows[0].id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;