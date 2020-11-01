const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('multer')
const sharp = require('sharp')
const User = require("../models/User");
const UserScore = require('../models/Game')


// Multer config

avatarUpload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|png|jpg)$/)) {
      cb(new Error('Please upload a jpeg, png or jpg file'))
    }
    cb(null, true)
  }
})

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    isAuth: true
  });
});

router.get("/me", auth, (req, res) => {
  res.status(200).json({
    success: true,
    username: req.user.username,
    email: req.user.email
  })
})

router.post('/me/avatar', auth, avatarUpload.single('avatar'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 200, height: 200 }).png().toBuffer()

  req.user.avatar = buffer

  await req.user.save()
  res.status(200).json({
    success:true
  })
}, (error, req, res, next) => {
  res.status(400).json({
    error: error.message
  })
})

router.delete('/me/avatar', auth, async (req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  res.status(200).json({
    success: true
  })
})
// get own avatar
router.get('/me/avatar', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    if (!user || !user.avatar) {
      throw new Error()
    }
    res.set('Content-type', 'image/png')
    res.send(user.avatar)
  } catch (e) {
    res.status(404)
  }
})

// Get other users avatar
router.get('users/:id/avatar', (req, res) => {

})

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    const userId = user._id
    const userStats = new UserScore({ user: userId });
    await user.save();
    await userStats.save()
    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        loginSuccess: false,
        error: "Unable to find email or password combination",
      });
    }
    await user.comparePassword(req.body.password);
    const token = await user.generateToken();
    res.status(200).cookie("access_token", token, { httpOnly: true }).json({
      loginSuccess: true,
    });
  } catch (e) {
    return res.status(500).json({
      loginSuccess: false,
      error: e.message,
    });
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.user._id}, { token:'' }, { useFindAndModify: false})
    res.status(200).json({
      success: true
    })
  } catch (e) {
    res.status(400).json({
      error: e
    })
  }
});

module.exports = router;
