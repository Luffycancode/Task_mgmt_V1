const tasks= require('../task.json').tasks


const getalltask=(req,res)=>
{
res.status(200).json(tasks)
}


const gettaskbyid=(req,res)=>
{
const id= Number(req.params.id)
const reqid= tasks.find((i)=>i.id===id)

if(!reqid)
{
res.status(404).json('The user does not exist')
}

res.status(200).json(reqid)
}


const createatask=(req,res)=>
{
const data=req.body
const newtask=
{
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

}

const updateatask=(req,res)=>
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

}

const deleteatask=(req,res)=>
{
const id=Number(req.params.id)
const taskid=tasks.findIndex((i)=>i.id===id)

tasks.splice(taskid,1)

res.json('Deleted')
}


module.exports = {
    getalltask,
    gettaskbyid,
    createatask,
    updateatask,
    deleteatask
};
