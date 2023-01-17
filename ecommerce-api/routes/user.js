const router = require('express').Router()
const { verifyToken, checkAdmin } = require('./authJWT')
const User = require('../models/user')

router.put('/:id', verifyToken, checkAdmin, async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        return res.status(200).json({ updatedUser })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

router.delete('/:id', verifyToken, checkAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id)
        return res.status(200).send({
            message: "User has been deleted successfully."
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get user by Id

router.get('/:id', verifyToken, checkAdmin, async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id)
        return res.status(200).send({
            success: true,
            data: user
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong."
        })
    }
})

// Get all users
router.get('/', [verifyToken, checkAdmin], async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).send({
            success: true,
            data: user
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
        const data = await User.aggregate([
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
