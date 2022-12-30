const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    homeIcon: { type: String, required: true },
    img: { type: String, required: true },
    icon: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "Booked" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);
