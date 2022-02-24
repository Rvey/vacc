const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
} = require('../controllers/manager.contoller')

router.post('/store', store)

module.exports = router;