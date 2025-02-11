const express = require("express")
const router = express.Router('/url')
const {handleviews} = require('../controller/url')

router.get('/',handleviews)



module.exports = router