const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    products:[{
        productId:{
            type:String
        },
        quantity:{
            type:Number,
            default:1,
        }
    }],
    amount:{
        type:Number,
        require:true
    },
    address:{
        type:Object,required:true
    },
    status:{
        type:String,
        default:"pending"
    }
})

module.exports = mongoose.model('Order',orderSchema);