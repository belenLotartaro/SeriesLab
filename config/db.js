import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017"; 
const dbName = "AH20232CP1";

let db;
let client;

export const connectDB = async () => { 
    try {
        client = new MongoClient(url);
        await client.connect();
        db = client.db(dbName);
        console.log("DB:", dbName);
    } catch (error) {
        console.error("Error conectando a la base de datos:", error);
    }
};

export const getDB = () => {
    if (!db) {
        throw new Error("Conexión con la base no lograda.");
    }
    return db;
};

export const closeDB = async () => {
    if (client) {
        await client.close();
        console.log("Conexión a la base de datos cerrada.");
    }
};