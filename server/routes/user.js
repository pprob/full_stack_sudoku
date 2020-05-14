const express = require('express')

const router = express.Router();

const User = require('../models/User')


router.get('/auth', auth, (req, res) => {
  
})


router.post('/register', async (req, res) => {

  const user = new User(req.body)
  
  try {
    await user.save()

    return res.status(200).json({
      success:true,
      user
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e
    })
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    
    if(!user) {
      return res.status(400).json({
        loginSuccess: false,
        error: "Unable to find email or password combination"
      })
    }
    await user.comparePassword(req.body.password)
    const token = await user.generateToken()
    
    res.status(200).cookie('access_token', token).json({
      loginSuccess: true
    })

  } catch(e) {
    return res.status(500).json({
      loginSuccess: false,
      error : e.message
    })
  }
})

module.exports = router