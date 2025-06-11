const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  data: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;