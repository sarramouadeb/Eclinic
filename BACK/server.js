require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.config');

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3002'],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.post('/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Add logic to authenticate the user here
      if (email && password) {
        res.status(200).json({ message: 'User logged in successfully' });
      } else {
        res.status(400).json({ message: 'Email or Password missing' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
// Start server
mongoose.connection.once('open', () => {
    console.log('Connected to the database');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
