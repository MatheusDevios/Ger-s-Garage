const Appointment = require("../models/Appointment");

createAppointment = async (appointment, slot) => {
  //   console.log({ slot });
  let newMechanic;
  switch (slot.mechanic) {
    case "1":
      newMechanic = "Michael";
      break;
    case "2":
      newMechanic = "Jordan";
      break;
    case "3":
      newMechanic = "Tim";
      break;
    case "4":
      newMechanic = "Wilson";
      break;
    default:
      break;
  }
  console.log(typeof slot.mechanic);
  const newAppointment = new Appointment({
    userId: appointment.userId,
    name: appointment.name,
    email: appointment.email,
    phone: appointment.phone,
    type: appointment.type,
    maker: appointment.maker,
    license: appointment.license,
    products: appointment.products,
    totalAmountProducts: appointment.totalAmountProducts,
    totalAppointmentAmount: appointment.totalAppointmentAmount,
    service: appointment.service,
    slots: slot._id,
    mechanic: newMechanic,
    comments: appointment.comments,
  });

  const savedAppointment = await newAppointment.save();

  return savedAppointment;
};

module.exports = {
  createAppointment,
};
