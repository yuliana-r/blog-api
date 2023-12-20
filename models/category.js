const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
});

CategorySchema.virtual("url").get(function () {
  return `/category/${this.name}`;
});

module.exports = mongoose.model("Category", CategorySchema);
