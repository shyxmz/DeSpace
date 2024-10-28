const mongoose = require('mongoose');

// Schema for structure of DB // 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  }
}, { timestamps: true } // To get date and time of the entry created and updated // 
); 

// Model for interation with DB // 
const User = mongoose.model('User', userSchema);

module.exports = User; 
