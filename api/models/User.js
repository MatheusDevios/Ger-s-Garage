const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    license: { type: String, required: true },
    maker: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cart: { type: Array },
    cartTotalAmount: { type: Number },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
