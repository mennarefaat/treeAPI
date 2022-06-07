import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(
  process.env.DATABASE_URL || 'mongodb://localhost:27017/reciepsTestDB',
  () => {
    console.log('DB connected');
  }
);
