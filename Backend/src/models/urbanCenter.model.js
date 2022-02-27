const mongoose = require('mongoose')

const urbanCenter = new mongoose.Schema({
    city: {
        type: String,
    },
    region: {
        type: String,
    },
    urbanCenter: {
        type: String,
    },
})

module.exports = mongoose.model('urbanCenter', urbanCenter)