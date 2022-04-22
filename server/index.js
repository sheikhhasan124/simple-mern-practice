const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
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
     const user = {name:'bablu', email:'bablu@gmail.com'}
     const result = await userCollection.insertOne(user)
     console.log(`user interted and id ${result.insertedId}`)
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