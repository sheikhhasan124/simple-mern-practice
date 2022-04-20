const express = require('express')
const app = express()
const PORT = 5000;

const users = [
    {id:1, name:"alam",email:"alam@gmail.com"},
    {id:2, name:"blam",email:"alam@gmail.com"},
    {id:3, name:"clam",email:"alam@gmail.com"},
    {id:4, name:"dlam",email:"alam@gmail.com"},
    {id:5, name:"elam",email:"alam@gmail.com"},
]

app.get('/',(req,res)=>{
    res.send('hello from home')
})
app.get('/about',(req,res)=>{
    res.send('hello from about')
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find(u=>u.id==id)
    res.send(user)
})

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})