const express = require('express');
const router = express.Router();
const db = require('../db'); // Assuming this is your Pool from 'pg'

// 1. GET all credentials
router.get('/', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM credentials ORDER BY id DESC');
        res.json(results.rows); // Postgres needs .rows
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "FETCH_FAILED" });
    }
});

// 2. POST new credential
router.post('/', async (req, res) => {
    const { type, title, provider, date_label, description, file_url } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO credentials (type, title, provider, date_label, description, file_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [type, title, provider, date_label, description, file_url]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DATABASE_INSERT_FAILED" });
    }
});

// 3. DELETE credential
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Changed '?' to '$1' for PostgreSQL compatibility
        await db.query('DELETE FROM credentials WHERE id = $1', [id]);
        res.json({ message: "CREDENTIAL_TERMINATED" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "DELETE_FAILED" });
    }
});

module.exports = router;