import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

export default function postData(){

}
const filter = {
  'name': 'Ribeira Charming Duplex'
};

const client = await MongoClient.connect(
  'mongodb+srv://gasader:c256abc9@cluster0.x8pycog.mongodb.net/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('sample_airbnb').collection('listingsAndReviews');
const cursor = coll.find(filter);
const result = await cursor.toArray();
return 
await client.close();

