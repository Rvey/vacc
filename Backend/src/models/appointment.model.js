const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    age: {
        type: String,
        // required: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        // required: true
    },
    Cin: {
        type: String,
        // required: true
    },
    VaccNumber: {
        type: String,
        // required: true
    },
    chronicDisease: {
        type: String,
        // required: false
    },
    SideEffectDesc: {
        type: String,
        // required: false
    },
    phone: {
        type: String,
        // required: true
    },
    date: {
        type: String,
        // required: Date
    },
    patientStatus: {
        type: String,
        default: "pending"
    },
    city: {
        type: String
    },
    region: {
        type: String
    },
    center: {
        type: String
    }
})

module.exports = mongoose.model('appointment', appointmentSchema)