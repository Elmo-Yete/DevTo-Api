const jwt = require ("../lib/jwt.lib")
require ("dotenv").config()
const {SECRET_KEY} = process.env


const auth = (req,res,next) => {
    try {
        const authorization = req.headers.authorization || ""
        const token = authorization.replace("Bearer","")
        const isVerified = jwt.verify(token,SECRET_KEY)
        next()
    }catch(error){
        res.status(401)
        res.json ({
            succes:false,
            message:error.message
        })
    }
}

module.exports = auth;