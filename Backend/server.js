const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Routes
app.use('/api/auth', authRoutes);      // All auth routes start with /api/auth
app.use('/api/projects', projectRoutes); // All project routes start with /api/projects4
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/upload', require('./routes/upload'));
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`System Online: Port ${PORT}`);
});