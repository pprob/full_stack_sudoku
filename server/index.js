const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

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


app.listen(5000, () => {
  console.log('app listening on port 5000')
})