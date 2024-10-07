export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kauarossanezi:<kaua@Rossanezi102030>@kauas.qnb3l.mongodb.net/?retryWrites=true&w=majority&appName=kauas";

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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
const { MongoClient } = require('mongodb');

let database, collection;

async function initDatabase() {
    const uri = "mongodb+srv://<kauas>:<kaua@Rossanezi102030>@kauas.qnb3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Conectado ao MongoDB!");

        database = client.db('myFirstDatabase');
        collection = database.collection('myCollection');

    } catch (err) {
        console.error("Erro ao conectar ao MongoDB", err);
    }
}

async function getChatHistory() {
    if (!collection) {
        console.log("Database not initialized.");
        return;
    }
    try {
        const history = await collection.find().toArray();
        return history;
    } catch (err) {
        console.error("Erro ao obter o histórico do chat", err);
    }
}

// Chame initDatabase() em algum ponto do início do seu aplicativo para garantir que o banco de dados esteja pronto para uso
initDatabase();

// Exemplo de uso:
async function exampleUsage() {
    const history = await getChatHistory();
    console.log(history);
}
exampleUsage();

require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

// Restante do código para conexão e operações


