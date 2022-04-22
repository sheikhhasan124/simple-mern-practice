const express = require('express')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


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
// query
app.get('/users',(req,res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(matched)
    }else{

        res.send(users)
    }
})
// post route
app.post('/user',(req,res)=>{
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
// this is dynamic param
app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id==id)
    res.send(user)
})

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})