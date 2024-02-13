const User = require('../models/uesr shema')

const bcrypt = require('bcrypt')
const register = async (req, res) => {
  try {
    const isUser = await User.findOne({ email: req.body.email })
    console.log(isUser)
    if (isUser) res.status(400).json({ massage: 'user already exist' })
    else {
      const hash = await bcrypt.hash(req.body.password, 10)
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash
      })
      res.status(201).json({ massage: 'ok' })
    }
  } catch (error) {
    console.log(error)

    res.status(500).json({ massage: 'error' })
  }
}

module.exports = { register }
