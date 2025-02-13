const User = require("../model/User");
const { getuser } = require("../service/auth")


async function handleloginsesssion(req,res,next) {
    
    const Useruid  = req.cookies?.uid
     
    if(!Useruid) return res.render("Login")
        
        const user = getuser(Useruid)
        if(!user) return res.render("Login")
     req.user = user
    next();
}
async function getAuth(req,res,next) {
    
    const Useruid  = req.cookies?.uid   
    
    const user = getuser(Useruid)
        
     req.user = user
    next();
}
module.exports = {
    handleloginsesssion,
    getAuth
}