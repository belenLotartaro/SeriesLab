import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

async function getSeries() {
    const seriesCollection = getDB().collection("series");
    try {
        return await seriesCollection.find().toArray();
    } catch (error) {
        console.error("Error al obtener series:", error);
        return [];
    }
} 


async function getSerieId(id) { 
    const seriesCollection = getDB().collection("series");
    try {
        const serie = await seriesCollection.findOne({ _id: new ObjectId(id) }); 
        return serie || {};
    } catch (error) {
        console.error("Error al obtener serie:", error);
        return {};
    }
}

async function agregarSerie(serie) {
    const seriesCollection = getDB().collection("series");

    const nuevoSerie = {
        ...serie
    };

    try {
        const result = await seriesCollection.insertOne(nuevoSerie);
        return { ...nuevoSerie, _id: result.insertedId };
    } catch (error) {
        console.error("Error al agregar la serie:", error);
        return null;
    }
}

async function eliminarSerie(id) {
    const seriesCollection = getDB().collection("series");
    try {
        await seriesCollection.deleteOne({ _id: new ObjectId(id) });
        return id;
    } catch (error) {
        console.error("Error al eliminar la serie:", error);
        return null;
    }
}

async function modificarSerie(id, serieActualizado) {
    const seriesCollection = getDB().collection("series");
    try {
        await seriesCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: serieActualizado }
        );
        return { id, ...serieActualizado }; 
    } catch (error) {
        console.error("Error al modificar la serie:", error);
        return null;
    }
}

export {
    getSeries,
    getSerieId,
    agregarSerie,
    eliminarSerie,
    modificarSerie
};
