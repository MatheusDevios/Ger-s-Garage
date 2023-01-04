const { query } = require("express");
const Appointment = require("../models/Appointment");
const Slot = require("../models/Slot");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//GET ALL APPOINTMENTS

router.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER APPOINTMENT
router.get("/all/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const appointment = await Appointment.find({
      userId: req.params.id,
    }).sort({ createdAt: -1 });
    res.status(200).json(appointment);
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
//CREATE

router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const newSlot = new Slot({
      slotTime: req.body.slotTime,
      slotDate: req.body.slotDate,
      mechanic: req.body.mechanic,
    });

    const savedSlod = await newSlot.save();
    let newMechanic;
    switch (req.body.mechanic) {
      case 1:
        newMechanic = "Michael";
        break;
      case 2:
        newMechanic = "Jordan";
        break;
      case 3:
        newMechanic = "Tim";
        break;
      case 4:
        newMechanic = "Wilson";
        break;
      default:
        break;
    }
    // console.log(req.body.service.price);
    const newAppointment = new Appointment({
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      type: req.body.type,
      maker: req.body.maker,
      license: req.body.license,
      products: req.body.products,
      totalAmountProducts: req.body.totalAmountProducts,
      totalAppointmentAmount:
        req.body.totalAmountProducts + req.body.service.price,
      service: req.body.service,
      slots: savedSlod._id,
      mechanic: newMechanic,
      comments: req.body.comments,
    });

    const savedAppointment = await newAppointment.save();

    res.status(200).json(savedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE / ADD PRODUCTS TO THE SERVICE
router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  // console.log(req.params.id);
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        $push: { products: req.body.products },
        totalAmountProducts: req.body.totalAmountProducts,
        totalAppointmentAmount: req.body.totalAppointmentAmount,
      },
      { new: true }
    );
    res.status(200).json(updatedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE THE STATUS OF THE SERVICE
router.put("/status/:id", verifyTokenAndAdmin, async (req, res) => {
  // console.log(req.params.id);
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

module.exports = router;
