const express = require('express');
const router = express.Router();

const {
    store,
    NManagerLogin,
    index,
    deleteNManager,
} = require('../controllers/nationalManager.controller')
const { AdminAuth } = require("../middleware/auth.middleware")
router.get('/', index)
router.post('/store',  store)
router.delete('/:id', deleteNManager)
router.post('/login', NManagerLogin)

module.exports = router;