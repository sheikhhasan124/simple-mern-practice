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
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('connect')
  client.close();
});


app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(PORT,()=>{
    console.log(`server is runnig at https//localhost
    ${PORT}`)
})