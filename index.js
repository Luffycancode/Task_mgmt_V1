const express= require('express')
const app= express();
const tasks= require('./task.json').tasks
const homeroute=require('./Routes/Homeroute')
const taskroute=require('./Routes/taskroute')
app.use(express.json());

//For request on home page
app.use('/',homeroute)

//To get all  task id
app.use('/api',taskroute)

//to get specific  task id
app.use('/api',taskroute)

//to create new task id
app.use('/api',taskroute)

//To update the task using put
app.use('/api',taskroute)

//Server
app.listen(3000,()=>
{
    console.log('Running server on 3000')
})
