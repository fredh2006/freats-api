const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  date: {
    type: Date,
  },
  title: {
    type: String,
  },
  prevImage:{
    type: String,
  },
  images:{
    type: String,
  },
  firstPara: {
    type: String,
  },
  content: {
    type: String,
  },
  time:{
    type: String
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
