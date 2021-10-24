const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

 
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
    },
  
  phoneNumber: {
    type: String,
  },
});

module.exports = mongoose.model('user', UserSchema);
