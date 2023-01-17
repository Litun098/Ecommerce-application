const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register User

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 10),
    })

    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(201).json({
            savedUser
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Something went wrong."
        })
    }
})


// Login user

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await User.findOne({ email: email })
        if (!user) {
            res.status(404).send({
                message: "User name or password incorrect."
            })
        }
        const validate = bcrypt.compareSync(password, user.password);
        if (!validate) {
            res.status(500).send({
                message: "Username or password incorrect."
            })
        }

        const accessToken = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET_TOKEN,
            { expiresIn: "121d" }
        );

        console.log(user)
        res.status(200).send({
            message: "Logged in successfully.",
            success: true,
            data: {
                name: user.username,
                email: user.email,
                phone: user.phone,
                token: accessToken,
            }
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Something went wrong."
        })
    }
})

module.exports = router