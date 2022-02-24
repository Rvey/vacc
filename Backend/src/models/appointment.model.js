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
    adress: {
        type: String,
        // required: true
    },    
    CIN: {
        type: String,
        // required: true
    },    
    vaccinNumber: {
        type: String,
        // required: true
    },    
    chronicDisease: {
        type: String,
        // required: false
    },    
    effectedDetails: {
        type: String,
        // required: false
    },    
    chronicDiseaseDetails: {
        type: String,
        // required: false
    },    
    phoneNumber: {
        type: String,
        // required: true
    },   
    date: {
        type: String,
        // required: Date
    },
    manager: { type:mongoose.Schema.ObjectId, ref: 'manager' }
})

module.exports = mongoose.model('appointment', appointmentSchema)