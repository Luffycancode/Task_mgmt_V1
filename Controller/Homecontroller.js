const homepage = (req,res) =>
{
res.status(200).json('Hi user, You on are home page')
}

//You can use normal function too instead of arrow function!!

module.exports=homepage;