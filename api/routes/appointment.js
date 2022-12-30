const Appointment = require("../models/Appointment");
const Slot = require("../models/Slot");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//GET ALL APPOINTMENTS

router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE

router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const newSlot = new Slot({
      slotTime: req.body.slotTime,
      slotDate: req.body.slotDate,
    });

    const savedSlod = await newSlot.save();

    const newAppointment = new Appointment({
      userId: req.body.userId,
      service: req.body.service,
      products: req.body.products,
      slots: savedSlod._id,
    });

    const savedAppointment = await newAppointment.save();

    res.status(200).json(savedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.status(200).json("Appointment has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET LAST USER APPOINTMENT
router.get("/findLast/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      userId: req.params.id,
    }).sort({ createdAt: -1 });
    res.status(200).json(appointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
