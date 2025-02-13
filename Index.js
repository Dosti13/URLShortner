const express = require("express")
const app = express()
const PORT = 4000
const urlroute  = require('./route/url')
const staticroute  = require('./route/Static')
const Userroute = require('./route/User')
const connect = require ('./db/db')
const Url = require('./model/Url')
const cookieparser = require("cookie-parser")
const {handleloginsesssion,getAuth} = require("./middlewear/Auth")
require("dotenv").config()

app.set("view engine","ejs")
connect()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())
app.use('/url', handleloginsesssion, urlroute)

app.use('/user',Userroute)

app.use('/',getAuth,staticroute)
app.listen(PORT,()=>console.log(`Server listen in this ${PORT}`))
