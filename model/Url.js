const mongoose = require("mongoose") 

const urlSchema= mongoose.Schema({


        redirecturl:{
            type:String,
            required: true
        },

        Shortid : {
            type:String,
            required:true,
            unique:true
        },
        visithistor:[{timestamp: {type:Number}}]


},    {timestamp:true}

)

const Url = mongoose.model("Url",urlSchema)
module.exports = Url