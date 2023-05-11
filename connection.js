
const mongoose = require('mongoose');
require('dotenv').config();

(async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

