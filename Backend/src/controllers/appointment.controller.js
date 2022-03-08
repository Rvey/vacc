const appointment = require("../models/appointment.model");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../utils/mail")
var dayjs = require('dayjs')

const index = async (req, res) => {
  sss.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};


const show = async (req, res) => {
  try {
    const result = await appointment.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const store = async (req, res, next) => {
  const { email, firstName, lastName, age, address, Cin, VaccNumber, phone, chronicDisease, SideEffectDesc, patientStatus, city , region , center } = req.body;
  try {


    const existingEmail = await appointment.findOne({ email });

    if (existingEmail)
      return res.status(400).json({ message: "email already exists" });

    const date = dayjs(new Date()).add(1, 'month').format('DD/MM/YYYY')

    const newAppointment = await appointment.create({
      email,
      firstName,
      lastName,
      age,
      Cin,
      address,
      VaccNumber,
      chronicDisease,
      phone,
      SideEffectDesc,
      date: date,
      city ,
      region,
      patientStatus,
      center
    });

    sendMail(email, firstName, lastName, date)
    res.status(200).json({ newAppointment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const destroy = async (req, res) => {
  const { id } = req.params;
  const record = { _id: id };
  try {
    const result = await appointment.deleteOne(record);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  index,
  show,
  store,
  destroy,
};