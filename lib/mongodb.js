import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  const uri = "mongodb+srv://harshkaushik261103:WckNUbL0KrnPVyf3@cluster.xpb3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"; // MongoDB URI stored in .env
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
