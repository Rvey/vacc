const express = require('express');
const router = express.Router();

const {
    store,
    index,
    deleteUrbanCenter
} = require('../controllers/urbanCenter.controller')

router.get('/',index)
router.post('/store', store)
router.delete('/:id', deleteUrbanCenter)

module.exports = router;