const express = require("express");
const router = express.Router();
const UserScore = require("../models/Game");
const User = require('../models/User')
const auth = require("../middleware/auth");
const convertNumToString = require('../utils/convertNumToString/convertNumToString')


//fetch leaderboard

router.get('/leaderboard', async (req, res) => {
  const userScores = await UserScore.find({}).populate('user')
  
  const users = userScores.map((user) => {
    const wins = user.difficulty.ten
    const userName = user.user.username
    return {
      userName,
      wins
    }
  })
  res.status(200).json({
    success: true,
    userData: users
  })
})

//updates score when user wins game
router.patch('/update-score', auth, async (req, res) => {
    const userId = req.user._id
    const difficulty = parseInt(req.body.difficulty)
    
    const stringDifficulty = `difficulty.${convertNumToString(difficulty)}`
    
    const scoreCard = await UserScore.findOneAndUpdate({ user: userId }, { $inc: { [stringDifficulty] : 1 }}, { useFindAndModify: false })
    
    res.status(204).json({
      success: true
    })
})

//gets user scorecard
router.get("/my-score", auth, async (req, res) => {
  const userId = req.user._id;
  try {
    const scoreCard = await UserScore.findOne({ user: userId})
    await scoreCard.populate('user').execPopulate()
   
    res.status(200).json({
      success: true,
      scoreCard: scoreCard.difficulty,
      username: scoreCard.user.username,
      email: scoreCard.user.email
    });
  } catch (e) {
      res.status(400).json( {
          success: false
      })
  }
});

module.exports = router;


// const user = await User.findById(req.user._id)
// await user.populate('score').execPopulate()
// console.log(user.score)
// res.status(200).json({
//     success: true
// })