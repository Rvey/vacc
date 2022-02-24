const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
    loginManager
} = require('../controllers/manager.contoller')

router.post('/store', store)
router.post('/login',loginManager)

module.exports = router;