const appointment = require("../models/appointment.model");
const bcrypt = require("bcryptjs");
// const logger = require("../utils/logger");

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
  const { email, firstName, lastName, age, address, Cin,vaccinNumber, phone,chronicDisease, effectedDetails, chronicDiseaseDetails } = req.body;
  try {
    // if (!email || !firstName || !lastName || !age || !adress || !CIN || !vaccinNumber || !phoneNumber || !manager )
    //   return res.status(400).json({ message: "Please fill all the fields" });

    const existingEmail = await appointment.findOne({ email });

    if (existingEmail)
      return res.status(400).json({ message: "email already exists" });

    const newAppointment = await appointment.create({
      email,
      firstName: firstName,
      lastName: lastName,
      age: age,
      Cin: Cin,
      address: address,
      vaccinNumber: vaccinNumber,
      chronicDisease: chronicDisease,
      phone: phone,
      effectedDetails: effectedDetails,
      chronicDiseaseDetails: chronicDiseaseDetails,
      // manager:manager
    });

    // logger.info(`New driver ${firstName} ${lastName} submitted for a job , license : ${license}`);
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