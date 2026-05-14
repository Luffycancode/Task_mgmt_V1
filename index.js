const express= require('express')
const app= express();
const tasks= require('./task.json').tasks
app.use(express.json());


app.listen(3000,()=>
{
    console.log('Running server on 3000')
})



app.get('/',(req,res)=>
{
res.send('On home page')
})


//Get all tasks
app.get('/api/v1/tasks',(req,res)=>
{
res.send(tasks)
})


// Implement GET /tasks/:id: Retrieve a specific task by its ID.

app.get('/api/v1/tasks/:id',(req,res)=>
{
const id= Number(req.params.id)
const reqid= tasks.find((i)=>i.id===id)

if(!reqid)
{
res.status(404).json('The user does not exist')
}

res.status(200).json(reqid)

})



app.post('/api/v1/tasks',(req,res)=>
{
const data=req.body
// console.log(data)
const newtask={
    id:data.id,
    title: data.title,
    description: data.description,
    completed: data.completed
}


tasks.push(newtask)
res.status(200).json({
    success: true,
    data: 'New task created'
})


})



app.put('/api/v1/tasks/:id',(req,res)=>
{

const id=Number(req.params.id)
const taskid=tasks.find((i)=>i.id===id)

taskid.title=req.body.title;
taskid.description=req.body.description;
taskid.completed=req.body.completed;


    res.json({
        success: true,
        data: 'taskUpdated'
    });



})


// DELETE /tasks/:id: Delete a task by its ID.


app.delete('/api/v1/tasks/:id',(req,res)=>{

const id=Number(req.params.id)
const taskid=tasks.findIndex((i)=>i.id===id)

tasks.splice(taskid,1)

res.json('Deleted')

})