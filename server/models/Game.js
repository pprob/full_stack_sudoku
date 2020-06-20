const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    difficulty: {
        one: {
            type: Number,
            default: 0
        },
        two: {
            type: Number,
            default: 0
        },
        three: {
            type: Number,
            default: 0
        },
        four: {
            type: Number,
            default: 0
        },
        five: {
            type: Number,
            default: 0
        },
        six: {
            type: Number,
            default: 0
        },
        seven: {
            type: Number,
            default: 0
        },
        eight: {
            type: Number,
            default: 0
        },
        nine: {
            type: Number,
            default: 0
        },
        ten: {
            type: Number,
            default: 0
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const UserScore = mongoose.model("Score", GameSchema)

module.exports = UserScore