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
router.post('/store', AdminAuth, store)
router.delete('/:id', AdminAuth, deleteNManager)
router.post('/login', NManagerLogin)

module.exports = router;