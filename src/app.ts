import { config } from "dotenv";
config();

import { insertProdotto, getProdotti } from "./driver";
// insertProdotto("Maglietta rossa", 3000)
// getProdotti();



import * as orm from "./orm";
// orm.insertCategoria("Abbigliamento");
orm.getCategorie().then(risultato => console.log(risultato));











// const connectionString = process.env.MONGODB_CONNECTION_STRING!;

// import { MongoClient } from "mongodb";

// const client = new MongoClient(connectionString);

// client.connect()
// .then(r => {
//     console.log("Connessione avvenuta con successo.");
    
//     r.close()
//     .then(() => {
//         console.log("Connessione chiusa con successo");
        
//     })
//     .catch( err => {
//         console.log(err);
        
//     })
// })
// .catch(err => {
//     console.log("Connessione fallita.");
//     console.log(err);
    
    
// });
// console.log("FINITO");
