const User = require('../model/User')
const { v4: uuidv4 } = require('uuid');
const { setuser } = require('../service/auth');


async function handleSignup(req,res){
    console.log(req.body)

    const {name ,email ,password} = req.body
    User.create({
        name ,
        email,
        password
    })
    res.redirect("/")
}
async function handleLogin(req,res){
    console.log(req.body)
    const {email,password} = req.body
    const user = await User.findOne({email,  password})
    console.log(user,"login Data");
    if (!user)
        return res.render("Login", {
          error: "Invalid Username or Password",
    });
    const sessionId = uuidv4();
    setuser(sessionId, user)
    res.cookie("uid",sessionId)
    res.redirect("/")
} 




module.exports={handleSignup,handleLogin}

