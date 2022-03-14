const appointment = require("../models/appointment.model");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../utils/mail");
var dayjs = require("dayjs");

const index = async (req, res) => {
  sss
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message,
      });
    });
};

const show = async (req, res) => {
  try {
    const result = await appointment.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const store = async (req, res, next) => {
  const {
    email,
    firstName,
    lastName,
    age,
    address,
    Cin,
    VaccNumber,
    phone,
    chronicDisease,
    SideEffectDesc,
    patientStatus,
    city,
    region,
    center,
  } = req.body;
  try {
    const existingEmail = await appointment.findOne({
      email, 
    });

    if (existingEmail)
      return res.status(400).json({
        message: "email already exists",
      });

    const date = dayjs().add(1, "month");

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
      date: dayjs(date).toISOString(),
      city,
      region,
      patientStatus,
      center,
    });

    sendMail(email, firstName, lastName, date);
    res.status(200).json({
      newAppointment,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const record = {
    _id: id,
  };
  try {
    const patient = await appointment.findById(record);
    const { email, firstName, lastName, date } = patient;
    const current = patient.date;
    const updatedDate = dayjs(current).add(1, "month");

    if (patient.VaccNumber === "thirdVacc") {
      await appointment.updateOne(record, {
        $set: {
          patientStatus: "Vaccinated",
          VaccNumber: "Vaccinated",
        },
      });
      sendMail(email, firstName, lastName, updatedDate);
    } else if (patient.VaccNumber === "secondVacc") {
      await appointment.updateOne(record, {
        $set: {
          VaccNumber: "thirdVacc",
          date: dayjs(updatedDate).toISOString(),
          thirdVacc: dayjs(updatedDate).toISOString(),
        },
      });
      sendMail(email, firstName, lastName, updatedDate);
    } else if (patient.VaccNumber === "firstVacc") {
      await appointment.updateOne(record, {
        $set: {
          VaccNumber: "secondVacc",
          date: dayjs(updatedDate).toISOString(),
          secondVacc: dayjs(updatedDate).toISOString(),
        },
      });
      sendMail(email, firstName, lastName, updatedDate);
    }

    res.status(200).json({
      day: date,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateNotVaccinated = async (req, res) => {
  try {
    await appointment.updateMany(
      {
        date: {
          $lt: dayjs().toISOString(),
        },
        patientStatus: {
          $ne: "Vaccinated",
        },
      },
      {
        $set: {
          VaccNumber: "notVaccinated",
          patientStatus: "notVaccinated",
        },
      }
    );

    return res.status(200).json({
      message: "day updated",
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const record = {
    _id: id,
  };
  try {
    const result = await appointment.deleteOne(record);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  index,
  show,
  store,
  destroy,
  updateStatus,
  updateNotVaccinated,
};
