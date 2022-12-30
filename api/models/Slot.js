// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema(
  {
    mechanic: { type: String, required: true },
    slotTime: { type: String, required: true },
    slotDate: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slot", SlotSchema);
