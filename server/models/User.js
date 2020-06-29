const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: 1,
    validate: function(v) {
      if(!validator.isEmail(v)) {
        throw new Error('Please use a valid email address')
      }
    }
  },
  username: {
    type: String,
    unique: 1,
  },
  password: {
    type: String,
    validate: function(v) {
      if (v.toLowerCase().includes('password')) {
        throw new Error('Your password cannot contain the word password')
      } else if (v.length < 6) {
        throw new Error('Your password must be longer than 8 characters in length')
      }
    }
  },
  role: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    trim: true
  },
  token: {
    type: String,
  },
  tokenExpiration: {
    type: Number,
  },
  avatar: {
    type: Buffer
  }
});

// virtual property
userSchema.virtual('score', {
  ref: 'Score',
  localField: '_id',
  foreignField: 'user'
})

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;
      next()
    } catch (e) {
      return next(e);
    }
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function (plainPassword) {
  const isMatch = await bcrypt.compare(plainPassword, this.password);

  if (!isMatch) {
    throw new Error("Wrong email or wrong password combination");
  }
  return isMatch;
};

userSchema.methods.generateToken = async function () {
  const user = this;
  
  const token = jwt.sign(user._id.toHexString(), "testsecret",{ });
  
  user.token = token;
  await user.save();

  return token
};

const User = mongoose.model("User", userSchema);

module.exports = User;
