const express = require("express")
const router = express.Router('')
const {handleviews} = require('../controller/url')
router.get('/',handleviews)

router.get('/login',(req,res)=>{
    return res.render("Login")
})
router.get('/signup',(req,res)=>{
    return res.render("signup")
})

module.exports = router