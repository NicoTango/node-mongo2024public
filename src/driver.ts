import { MongoClient } from "mongodb"


export const insertProdotto = (nome: string, prezzo: number) => {
    const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);

    const db = client.db("amazon");
    const collection = db.collection("prodotti");

    const prodotto: Prodotto = {
        nome: nome,
        prezzo: prezzo,
        datainserimento: new Date()
    }

    collection.insertOne(prodotto)
    .then(r => console.log(r))
    .catch(err => console.log(err))

    interface Prodotto {
        nome: string,
        prezzo: number,
        datainserimento: Date,
    }
}

export const getProdotti = async () => {
    const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);

    const db = client.db("amazon");
    const collection = db.collection("prodotti");

    
    const prodotti = await collection.find().toArray();
    console.log(prodotti);
    
     await client.close();
}

    interface Prodotto {
        nome: string,
        prezzo: number,
        datainserimento: Date,
    }




