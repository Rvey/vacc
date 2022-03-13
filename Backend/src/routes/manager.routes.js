const express = require('express');
const router = express.Router();

const {
    store,
    loginManager,
    index,
    deleteManager,
} = require('../controllers/manager.contoller')
const { AdminAuth } = require("../middleware/auth.middleware")

router.get('/', index)
router.post('/store', AdminAuth, store)
router.delete('/:id', AdminAuth, deleteManager)
router.post('/login', loginManager)

module.exports = router;