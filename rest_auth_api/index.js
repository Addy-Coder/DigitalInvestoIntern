const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3000

//Enviroment variable config
dotenv.config()

//Connect to DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true, useFindAndModify:false},
    () => console.log('Connected to MongoDB'))

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


//Import Routes
const authRoute = require('./routes/auth')

//Routes Middlewares
app.use('/api/user', authRoute)


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
