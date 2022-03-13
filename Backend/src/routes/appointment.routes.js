const express = require('express');
const router = express.Router();
const {
    store,
    show,
    destroy,
    updateStatus,
    updateNotVaccinated
} = require('../controllers/appointment.controller')
const { NationalManager, AdminAuth } = require("../middleware/auth.middleware")

router.get('/', show)
router.post('/store', store)
router.delete('/:id', destroy)
router.put('/updateStatus/:id', updateStatus)
router.post('/updateNotVaccinated', updateNotVaccinated)

module.exports = router;