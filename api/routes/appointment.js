const { query } = require("express");
const { createAppointment } = require("../services/appointmentService");
const { createSlot } = require("../services/slotService");
const Appointment = require("../models/Appointment");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../services/verifyToken");

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

//CREATE
router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const slot = {
      slotTime: req.body.slotTime,
      slotDate: req.body.slotDate,
      mechanic: req.body.mechanic,
    };
    const createdSlot = await createSlot(slot);

    const appointment = {
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      type: req.body.type,
      maker: req.body.maker,
      license: req.body.license,
      products: req.body.products,
      totalAmountProducts: req.body.totalAmountProducts,
      totalAppointmentAmount: req.body.totalAmountProducts + req.body.service.price,
      service: req.body.service,
      slots: createdSlot._id,
      comments: req.body.comments,
    };

    const savedAppointment = await createAppointment(appointment, createdSlot);

    res.status(200).json(savedAppointment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE / ADD PRODUCTS TO THE SERVICE
router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
  // console.log(req.body.totalAmountProducts);
  // console.log(req.body.totalAppointmentAmount);
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

//DELETE PRODUCTS TO THE SERVICE
router.put("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        $set: { products: req.body.products },
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

//BOTH ENDPOINT BELLOW IS NOT BEING USED SO FAR

//DELETE SERVICE
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
