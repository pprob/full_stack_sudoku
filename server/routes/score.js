const express = require("express");
const router = express.Router();
const UserScore = require("../models/Game");
const User = require('../models/User')
const auth = require("../middleware/auth");

router.get("/my-score", auth, async (req, res) => {
//   const userId = req.user._id;
//   try {
//     const scoreCard = await UserScore.findOne({ user: userId})
//     await scoreCard.populate('user').execPopulate()
//     console.log(scoreCard)
//     res.status(200).json({
//       scoreCard: scoreCard
//     });
//   } catch (e) {}

    const user = await User.findById(req.user._id)
    await user.populate('score').execPopulate()
    console.log(user.score)
    res.status(200).json({
        success: true
    })
});

module.exports = router;
