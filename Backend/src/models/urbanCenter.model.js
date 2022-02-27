const mongoose = require('mongoose')

const UrbanCenterSchema = new mongoose.Schema({
    location: {
        type: String,
    },
    region: {
        type: String,
    },
    urbanCenter: {
        type: String,
    },
})

module.exports = mongoose.model('urbanCenter', UrbanCenterSchema)