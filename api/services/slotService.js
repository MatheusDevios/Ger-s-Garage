const Slot = require("../models/Slot");

const createSlot = async (slot) => {
  const newSlot = new Slot({
    slotTime: slot.slotTime,
    slotDate: slot.slotDate,
    mechanic: slot.mechanic,
  });

  const savedSlot = await newSlot.save();
  return savedSlot;
};

module.exports = {
  createSlot,
};
