const Appointment = require("../models/Appointment");
const Slot = require("../models/Slot");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../services/verifyToken");

const router = require("express").Router();

//GET ALL SLOTS

router.get("/", async (req, res) => {
  try {
    const slots = await Slot.find();
    res.status(200).json(slots);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SPECIFIC SLOT
router.get("/:id/:userId", verifyTokenAndAuthorization, async (req, res) => {
  // console.log(req.params.id);
  try {
    const slot = await Slot.find({ _id: req.params.id });
    res.status(200).json(slot);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
