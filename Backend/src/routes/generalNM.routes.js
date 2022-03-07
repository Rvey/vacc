const express = require('express');
const router = express.Router();
const { loginGNM } = require('../controllers/generalNManager.conroller');

router.post('/loginGNM', loginGNM)
module.exports = router