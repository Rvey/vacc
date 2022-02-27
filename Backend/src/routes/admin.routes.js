const express = require('express');
const router = express.Router();
import { loginAdmin } from '../controllers/admin.controller';
router.post('/loginAdmin', loginAdmin)