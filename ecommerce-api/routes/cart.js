const router = require('express').Router()
const { verifyToken, checkAdmin } = require('./authJWT')
const Cart = require('../models/cart')

// Create
router.post("/",[verifyToken], async (req,res)=>{
    const newProduct = new Cart(req.body);

    try{
        const savedCart = await newProduct.save();
        res.status(200).send({savedCart});
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            message:"Something went wrong."
        })
    }
})


// Update Cart
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedCart = await Cart.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        return res.status(200).json({ updatedCart })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Delete cart by Id

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        await Cart.findByIdAndDelete(id)
        return res.status(200).send({
            message: "Cart has been deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get cart by Id

router.get('/find',verifyToken,async (req, res) => {
    try {
        const id = req.userId;
        const cart = await Cart.findOne(id)
        return res.status(200).send({
            success: true,
            data: cart
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get all cart
router.get('/',verifyToken,checkAdmin, async (req, res) => {
    try {
        const cart = await Cart.find().sort({createdAt:-1})
        
        return res.status(200).send({
            success: true,
            data: cart
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})


// router.post("/stats", [verifyToken, checkAdmin], async (req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.getFullYear() - 1);

//     try {
//         const data = await Cart.aggregate([
//             {
//                 $match: {
//                     createdAt: { $gte: lastYear }
//                 }
//             },
//             {
//                 $project: {
//                     month: {
//                         $month: "$createdAt"
//                     },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 }
//                 },
//             }
//         ])

//         console.log(data);
//         return res.status(200).json({ data })
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({
//             message: "Something went wrong."
//         })
//     }
// })

module.exports = router
