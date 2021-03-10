const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const auth = require('./verifyToken')


router.post('/signup', async (req,res) => {
    
    //Checking for unique phone number
    const phoneNumberExists = await User.findOne({phone : req.body.phone})
    if(phoneNumberExists) return res.status(400).send("The Phone Number is already registered !")

    //Creating the new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })
    // console.log(user)

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (error) {
        // res.status(400).send(error)
        console.error(error)
    }

})

router.post('/login', async (req,res) => {
    //Checking for login creadentials
    const phoneNumberExists = await User.findOne({phone : req.body.phone})
    if(!phoneNumberExists) return res.status(400).send("The Phone Number does not exists !")

    // console.log("login details "+phoneNumberExists)
    //Create JWT
    const token = jwt.sign({_id: phoneNumberExists._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
    // res.send("Logged in")
})

router.get('/detail',auth, async (req,res) => {
    const userDetails = await User.findOne({phone : req.body.phone})
    res.json({
        UserName : userDetails.name,
        UserEmail : userDetails.email
    })
})

module.exports = router