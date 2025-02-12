const { getuser } = require("../service/auth")


async function handleloginsesssion(req,res,next) {
    
    const Useruid  = req.cookies?.uid
    console.log(Useruid);
     
    if(!Useruid) return res.render("Login")
    const user = getuser(Useruid)
    if(!user) return res.render("Login")
     req.user = user
    next();
}
async function getAuth(req,res,next) {
    
    const Useruid  = req.cookies?.uid   
    console.log(Useruid,"useruid");
    
    const user = getuser(Useruid)
        console.log(user,"user data ");
        
     req.user = user
    next();
}
module.exports = {
    handleloginsesssion,
    getAuth
}