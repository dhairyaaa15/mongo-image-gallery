const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const imageRoutes = require('./routes/imageRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5174', // Vite dev server default port
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/images', imageRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ message: 'File too large' });
  }
  if (error.message === 'Not an image! Please upload an image.') {
    return res.status(400).json({ message: error.message });
  }
  console.error('Server error:', error);
  res.status(500).json({ message: 'Internal server error' });
});

// Database connection
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;