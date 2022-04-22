const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const app = express()

const PORT = 5000;
//middlewere 
app.use(cors());
app.use(express.json())

//name:user1
//password:p2rei1USXT28JrGp


const uri = "mongodb+srv://user1:p2rei1USXT28JrGp@cluster0.gtyxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
 try{
    await client.connect()
    const userCollection = client.db("foodExpress").collection("user");
     // we will take data from client to server ,then server to database,,,,3 layer
     // get user
     app.get('/user',async(req,res)=>{
         const query = {};
         const cursor = userCollection.find(query);
         const users = await cursor.toArray()
         res.send(users)
     })
       // post user
     app.post('/user', async(req,res)=>{
         const newUser = req.body;
           const result = await userCollection.insertOne(newUser);
         res.send({result})
     })
     // update user
       app.put('/user/:id',async(req,res)=>{
           const id = req.params.id;
           const updatedUser = req.body;
           const filter = {_id:ObjectId(id)};
           const option = {upsert:true};
           const updateDoc = {
               $set:{
                   name:updatedUser.name,
                   email:updatedUser.email
               }
           }
           const result = await userCollection.updateOne(filter, updateDoc, option);
           res.send(result)
       })
     // find single user by dynamic params among many user
       app.get('/user/:id', async(req,res)=>{
           const id = req.params.id;
           const query = {_id: ObjectId(id)};
           const result = await userCollection.findOne(query);
           res.send(result)
       })
     // delete a user
     app.delete('/user/:id',async(req,res)=>{
         const id = req.params.id;
         const query= {_id:ObjectId(id)}
         const result = await userCollection.deleteOne(query);
         res.send(result)
     })
    }
 finally{
    // await client.close() 
 }
} 
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(PORT,()=>{
    console.log(`server is runnig at https//localhost
    ${PORT}`)
})