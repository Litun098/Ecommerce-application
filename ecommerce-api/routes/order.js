const router = require('express').Router()
const { verifyToken, checkAdmin } = require('./authJWT')
const Order = require('../models/order')
const User = require('../models/user')

// Create
router.post("/",[verifyToken], async (req,res)=>{
    const data = {
        userId:req.userId,
        products:req.body.products,
        address:req.body.address,
        amount:req.body.amount,
    }
    const newOrder = new Order(data);

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json({savedOrder});
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            message:"Something went wrong."
        })
    }
})


// Update Order
router.put('/:id', verifyToken,checkAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        return res.status(200).json({ updatedOrder })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Delete order by Id

router.delete('/:id', verifyToken,checkAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        await Order.findByIdAndDelete(id)
        return res.status(200).send({
            message: "Order has been deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get order by Id

router.get('/find',verifyToken,async (req, res) => {
    try {
        const id = req.userId;
        const orders = await Order.find(id)
        return res.status(200).send({
            success: true,
            data: orders
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get all order
router.get('/',verifyToken, async (req, res) => {
    try {
        const orders = await Order.find().sort({createdAt:-1})
        
        return res.status(200).send({
            success: true,
            data: orders
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

router.get("/stats", verifyToken, checkAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    console.log(lastMonth,prevMonth)
    try {
        const income = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: prevMonth }
                }
            },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                    sales:"$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ])

        console.log(income);
        return res.status(200).json({ income:income })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})


module.exports = router;