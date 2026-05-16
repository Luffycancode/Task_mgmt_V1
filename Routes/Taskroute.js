const express= require('express')
const taskroute=express.Router()
const tasks= require('../task.json').tasks
const taskcontroller = require('../Controller/Taskcontroller')


//To get all tasks
taskroute.get('/v1/tasks',taskcontroller.getalltask)

//To get a specific id
taskroute.get('/v1/tasks/:id',taskcontroller.gettaskbyid)

//to create new task id
taskroute.post('/v1/tasks',taskcontroller.createatask)

//To update the task
taskroute.put('/v1/tasks/:id',taskcontroller.updateatask)

//Delete a task
taskroute.put('/v1/tasks/:id',taskcontroller.deleteatask)


module.exports=taskroute