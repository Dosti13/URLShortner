const Url = require('../model/Url')
const shortId = require("shortid")
const path =require("path")

async function handleviews(req,res){
    const  Urldata = await Url.find({}) 
    res.render('index',{ urls:Urldata})
}

async function shorturl(req,res) {
    const ShortId = shortId()
    const body = req.body;
    console.log("Short id",ShortId);
    
    if(!body.Url) return res.status(400).json({error:"url dede "})
    await Url.create ({

        redirecturl:body.Url,
        Shortid:ShortId,
        visithistor:[]
    }  )  

    return res.render("index",{
        id:ShortId,
    })
    
}
async function redirect(req,res) {
    const Shortid = req.params.Shortid
    console.log(Shortid);
    
    const entry = await Url.findOneAndUpdate(
    {
        Shortid,
    },
    {
        $push:{
            visithistor:{
                timestamp: Date.now(),
            },
        },
    })
    console.log(entry);
    
    res.redirect(entry.redirecturl)
}

async function getanlaytics (req,res){
    const Shortid = req.params.Shortid
    if (!shortId) return res/JSON({error:"something "})
    const result = await Url.findOne({Shortid})
    console.log(result);
    
    return res.json({
        totalclicks:result.visithistor.length,
        analytics:result.visithistor })
}

module.exports = {shorturl,redirect,getanlaytics,handleviews}