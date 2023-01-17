const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connecting to mongoDB
mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log("Database connected successfully")
    }).catch((err) => {
        console.log(err.message);
    })

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})