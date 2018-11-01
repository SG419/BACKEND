const route=require('express').Router()
let teachers=[

{name:"shubham",subject:"maths"},
{name:"gupta" , subject:"webdev"}

]

route.get('/',(req,res)=>res.send(teachers))

route.get('/:id',(req,res)=>{
  if(isNaN(parseInt(req.params.id))){

    next();
  }  
    res.send(teachers[req.params.id])
})

route.get('/add',(req,res)=>{

    teachers.push({

        name:req.query.name,
        subject:req.query.subject
    })
res.send(teachers)

})
module.exports=route