const mongoose = require('mongoose')

const GNMSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('GNMSchema', GNMSchema)