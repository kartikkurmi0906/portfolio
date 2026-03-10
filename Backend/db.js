const { Pool } = require('pg');
require('dotenv').config();

// Use the connectionString if available (Production/Neon), 
// otherwise fall back to local individual params
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // This is REQUIRED for Neon and Render
  }
});

module.exports = pool;