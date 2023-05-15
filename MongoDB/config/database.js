import * as dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const uri = process.env.DATABASE_URL;

const connectDb = async (req, res) => {
    console.log("connecting to database");
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:'Gymmini',
      });
      console.log("Database connected.");
    } catch (err) {
      //ต่อไม่ให้ให้ออก
      console.error("connect db failed", err.message);
      //ให้จบโปรแกรม
      process.exit(1);
    }
  };
  export default connectDb;

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