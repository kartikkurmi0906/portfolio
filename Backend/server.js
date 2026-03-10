const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load environment variables

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

const app = express();

// Middleware
// Replace app.use(cors()); with this:
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // We will set this in Render later
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
})); // In production, you might restrict this to your frontend URL
app.use(express.json());

// Serving uploads folder - ensure this folder exists on your server!
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/credentials', require('./routes/credentials'));
app.use('/api/upload', require('./routes/upload'));

// CHANGE: Use process.env.PORT for production
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`System Online: Port ${PORT}`);
});