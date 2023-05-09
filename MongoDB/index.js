// import { MongoClient } from 'mongodb';

// /*
//  * Requires the MongoDB Node.js Driver
//  * https://mongodb.github.io/node-mongodb-native
//  */

// const filter = {
//   'name': 'Ribeira Charming Duplex'
// };

// const client = await MongoClient.connect(
//   'mongodb+srv://gasader:c256abc9@cluster0.x8pycog.mongodb.net/',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const coll = client.db('sample_airbnb').collection('listingsAndReviews');
// const cursor = coll.find(filter);
// const result = await cursor.toArray();
// console.log(result)
// await client.close();



import express, { json } from "express";
import mongoose from "mongoose";
import expressSesstion from "express-session"

import { mock } from './models/mock.js'

const app = express()
const ipAddress = "127.0.0.1";
const port = 3001;

app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res) =>{
  console.log("GET")
  res.send(mock);
})

app.listen(port,ipAddress,()=>{
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
})