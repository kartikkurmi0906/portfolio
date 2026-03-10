const bcrypt = require('bcrypt');
const { Pool } = require('pg');
require('dotenv').config();

// Connect to your Live Neon Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required for Neon/Render
});

const createAdmin = async () => {
  const username = 'kartik_admin'; // Your login username
  const password = 'kartik123';    // Your plain text password
  const saltRounds = 10;

  try {
    console.log("--- HASHING_PASSWORD ---");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    console.log("--- INSERTING_INTO_NEON_DB ---");
    await pool.query(
      'INSERT INTO admins (username, password_hash) VALUES ($1, $2)',
      [username, hashedPassword]
    );

    console.log("SUCCESS: Admin 'kartik_admin' created in live database.");
    process.exit(0);
  } catch (err) {
    if (err.code === '23505') {
      console.error("ERROR: Admin already exists!");
    } else {
      console.error("DATABASE_ERROR:", err.message);
    }
    process.exit(1);
  }
};

createAdmin();