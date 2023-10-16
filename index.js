const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// MiddleWare
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v61q93t.mongodb.net/?retryWrites=true&w=majority`; // first purata dynamic korte hoibo then user and password bosaite hoibo


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();



/////// CRUD Oparational function added here



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();  //ei line  comment  korte hoibo jate eita all time chole bondho na hoy
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send("coffee making server is running")
})

app.listen(port, () => {
    console.log(`Coffee server is running on port: ${port}`)
})

