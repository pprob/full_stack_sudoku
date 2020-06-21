const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const config = require('./config/key')

// Connect to mongoose cluster
mongoose.connect(config.mongoURI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
}).then(() => console.log('MongoDB connected'))
  .catch((e) => console.log(e))

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/users', require('./routes/user'))
app.use('/api/payments', require('./routes/payment'))
app.use('/api/scores', require('./routes/score'))

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(5000, () => {
  console.log(`app listening on port ${port}`)
})