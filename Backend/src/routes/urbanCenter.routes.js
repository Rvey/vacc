const express = require('express');
const router = express.Router();

const {
    store,
    index,
    deleteUrbanCenter
} = require('../controllers/urbanCenter.controller')
const { ManagerAuth } = require("../middleware/auth.middleware")

router.get('/', index)
router.post('/store', ManagerAuth, store)
router.delete('/:id', ManagerAuth, deleteUrbanCenter)

module.exports = router;