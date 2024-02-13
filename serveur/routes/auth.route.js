const express = require('express')
const router = express.Router()






router.post("/register" ,require('../controllers/auth.controllers').register)





module.exports = router