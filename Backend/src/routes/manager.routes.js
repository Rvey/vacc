const express = require('express');
const router = express.Router();

const {
    store,
    loginManager,
    index,
    deleteManager,
} = require('../controllers/manager.contoller')
router.get('/', index)
router.post('/store', store)
router.delete('/:id', deleteManager)
router.post('/login',loginManager)

module.exports = router;