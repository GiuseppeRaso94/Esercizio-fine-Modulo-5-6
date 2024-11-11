const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema(
  {
    asin: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    img: {
      type: String,
      required: false,
      dafault: "https//picsum.photos/200/300",
    },
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: { type: String, required: false, default: undefined },
  },
  { timestamps: true, strict: true }
);

module.exports = mongoose.model("booksModel", BookSchema, "books");