const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  text: { type: String, minLength: 1, required: true },
  timestamp: { type: Date, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

CommentSchema.virtual('url').get(function () {
  return `/comments/${this._id}`;
});

module.exports = mongoose.model('Comment', CommentSchema);
