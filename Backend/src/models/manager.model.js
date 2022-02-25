const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true
    },    
    password: {
        type: String,
        required: true
    },  
    region: {
        type: String,
        required: true
    },   
})

module.exports = mongoose.model('manager', managerSchema)