const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    
    if (token) {
        try{
            const result = jwt.verify(token,process.env.JWT_SECRET_TOKEN)
            
            if(result){
                req.userId = result.id
                next()
            }else{
                return res.status(400).json({
                    message:"Please login again"
                })
            }
        }catch(err){
            console.log(err)
            return res.status(403).json({
                message:"Token has expired."
            })
        }
    } else {
        return res.status(401).json({
            message: "Please login."
        })
    }
}

const checkAdmin = (req,res,next)=>{
    const token = req.headers['x-access-token'];
    const result = jwt.verify(token,process.env.JWT_SECRET_TOKEN)
    
    verifyToken(req,res,()=>{
        if(result.isAdmin){
            next();
        }else{
            res.status(403).json({
                message:"You are not admin."
            })
        }
    })
}

module.exports = {
    verifyToken,
    checkAdmin
}