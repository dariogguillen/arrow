const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const userRoutes = require('./routes/user')

mongoose.Promise = global.Promise
mongoose
  .connect('mongodb://localhost:27017/rest-api')
  .then(db => console.log('db is connected'))
  .catch(err => console.log(err))

// Settings
app.set('port', process.env.PORT || 3000)

// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

// ROutes
app.use('/users', userRoutes)

//static files

// start server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
