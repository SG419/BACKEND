const route=require('express').Router()
let students=[

{name:"bham",subject:"math"},
{name: "cham", subject:"web"},
{name:"dham ", subject:"android"},
{name:"eham ", subject:"machine"}

]

route.get('/',(req,res)=>res.send(students))
route.post('/',(req,res)=>{
    students.push({
        name:req.body.name,
        college:req.body.college,
        year:req.body.year
    })
    
})
route.get('/:id',(req,res)=>res.send(students[req.params.id]))


module.exports=route