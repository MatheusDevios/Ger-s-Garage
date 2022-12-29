// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const AppointmentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    slots: { type: ObjectId, ref: "Slot" },
    service: { type: Array, required: true },
    products: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
