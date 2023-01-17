const router = require('express').Router()
const { verifyToken, checkAdmin } = require('./authJWT')
const Product = require('../models/product')

// Create
router.post("/",[verifyToken,checkAdmin], async (req,res)=>{
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();
        res.status(200).send({savedProduct});
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            message:"Something went wrong."
        })
    }
})


// Update Product
router.put('/:id', verifyToken, checkAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        return res.status(200).json({ updatedProduct })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Delete product by Id

router.delete('/:id', verifyToken, checkAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id)
        return res.status(200).send({
            message: "Product has been deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get product by Id

router.get('/find/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id)
        return res.status(200).send({
            success: true,
            data: product
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get all product
router.get('/', async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let product;

        if(qNew){
            product = await Product.find().sort({createdAt:-1}).limit(5);
        }else if(qCategory){
            product = await Product.find({category:{
                $in:[qCategory]
            }})
        }else{
            product = await Product.find();
        }

        return res.status(200).send({
            success: true,
            data: product
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})


router.post("/stats", [verifyToken, checkAdmin], async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.getFullYear() - 1);

    try {
        const data = await Product.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                },
            }
        ])

        console.log(data);
        return res.status(200).json({ data })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

module.exports = router
