const express = require('express');
const cors=require("cors");
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
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
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
})