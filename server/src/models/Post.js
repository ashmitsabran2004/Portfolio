const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, trim: true },
    slug: { type: String, trim: true, unique: true, sparse: true },
  },
  { timestamps: true },
)

module.exports.Post = mongoose.model('Post', PostSchema)

