const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/admin.controller');
router.post('/loginAdmin', loginAdmin)
module.exports = router