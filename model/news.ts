const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Title is required'],
    },
    desc: {
      type: String,
      trim: true,
    },
    maintext: {
      type: String,
      trim: true,
    },
    image_url: {
      type: String,
      trim: true,
    },
    authors: {
      type: Array,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('users', newsSchema);
