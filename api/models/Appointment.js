// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const AppointmentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    maker: { type: String, required: true },
    license: { type: String, required: true },
    mechanic: { type: String, required: true },
    comments: { type: String, required: false },
    slots: { type: ObjectId, ref: "Slot" },
    service: { type: Object, required: true },
    products: { type: Array, required: true },
    totalAmountProducts: { type: String, required: true },
    totalAppointmentAmount: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
