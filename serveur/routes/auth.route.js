const express = require('express')
const router = express.Router()






router.post("/register" ,require('../controllers/auth.controllers').register)
router.post("/login" ,require('../controllers/auth.controllers').login)






module.exports = router