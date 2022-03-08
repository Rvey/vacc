const express = require('express');
const router = express.Router();
const {
    store,
    show,
    destroy
} = require('../controllers/appointment.controller')

router.get('/',show)
router.post('/store', store)
router.delete('/:id', destroy)

module.exports = router;