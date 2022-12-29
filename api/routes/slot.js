const Appointment = require("../models/Appointment");
const Slot = require("../models/Slot");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//GET ALL SLOTS

router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const slots = await Slot.find();
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
