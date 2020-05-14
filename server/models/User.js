const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim:true,
    unique: 1,
  },
  username: {
    type: String,
    unique: 1,
    maxLength: 15
  },
  password: {
    type: String,
    minLength: 8
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String,
  },
  tokenExpiration: {
    type: Number
  }
})

userSchema.pre('save', async function (next) {
  const user = this;
  
  if(user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hash = await bcrypt.hash(user.password, salt)
  
      user.password = hash
    } catch (e) {
        return next(e)
    }
  } else {
    next()
  }
})

userSchema.methods.comparePassword = async function (plainPassword) {
  
  const isMatch = await bcrypt.compare(plainPassword, this.password)

  if(!isMatch) {
    throw new Error('Wrong email or wrong password combination')
  }
  return true
}

userSchema.methods.generateToken = async function () {
  const user = this;

  const token = 
}



const User = mongoose.model('User', userSchema)

module.exports = User 