const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req._id,
    isAuth: true,
    email: req.user.email,
    username: req.user.username,
    role: req.user.role,
  });
});

router.post("/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e,
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

    res.status(200).cookie("access_token", token).json({
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
