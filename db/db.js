const mongoose = require("mongoose")


const connect =async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/url')
        console.log("connect sucessfuly");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = connect