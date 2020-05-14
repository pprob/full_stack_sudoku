const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.access_token
    const decoded = await jwt.verify(token, 'testsecret')
    const user = await User.findOne({'_id': decoded, token: token})

    if (!user) {
      throw new Error()
    }
    req.user = user
    req.token = token
    next()
  } catch(e) {
    res.status(401).json({
      isAuth: false,
      error: e
    })
  }
}

modules.exports = auth