const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    minLength: 2,
    maxLength: 150,
    required: true,
    unique: true,
  },
  text: { type: String, minLength: 1, required: true },
  timestamp: { type: Date, required: true },
  imageURL: { type: String },
  isPublished: { type: Boolean, default: false, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  // commentCount: { type: Number, default: 0 },
});

PostSchema.virtual('url').get(function () {
  return `/posts/${this.category}/${this.title}`;
});

module.exports = mongoose.model('Post', PostSchema);
