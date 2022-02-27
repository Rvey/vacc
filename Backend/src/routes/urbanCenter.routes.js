const express = require('express');
const router = express.Router();

const {
    store,
    index,
    destroy
} = require('../controllers/urbanCenter.controller')

router.get('/',index)
router.post('/store', store)
router.delete('/:id', destroy)

module.exports = router;