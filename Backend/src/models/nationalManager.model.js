const mongoose = require('mongoose')

const nationalManagerSchema = new mongoose.Schema({
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
    role: {
        type: String,
        default: "nationalManager"
    }
})

module.exports = mongoose.model('nationalManager', nationalManagerSchema)