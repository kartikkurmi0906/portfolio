const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const allProjects = await pool.query('SELECT * FROM projects ORDER BY id DESC');
    res.json(allProjects.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add project
router.post('/', async (req, res) => {
  const { title, tech_stack, description, link, img_url } = req.body; // Added img_url
  try {
    const newProj = await pool.query(
      'INSERT INTO projects (title, tech_stack, description, link, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, tech_stack, description, link, img_url]
    );
    res.json(newProj.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
    res.json({ message: "Project_Deleted_Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;