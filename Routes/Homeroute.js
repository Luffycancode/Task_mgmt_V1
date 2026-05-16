const express= require('express')
const homeroute=express.Router()
const homepage = require('../Controller/Homecontroller')


homeroute.get(['/','/home'],homepage)


module.exports=homeroute