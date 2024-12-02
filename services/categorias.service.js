import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

async function obtenerCategorias() {
    const categoriasCollection = getDB().collection("categorias");
    try {
        return await categoriasCollection.find().toArray();
    } catch (error) {
        console.error("Error al obtener categorias:", error);
        return [];
    }
}

async function obtenerCategoriaPorId(id) { 
    const categoriasCollection = getDB().collection("categorias");  
    try {
        return await categoriasCollection.findOne({ _id: new ObjectId(id) });
    } catch (error) {
        console.error("Error al obtener categoria:", error);
        return null; 
    }
}

async function agregarCategoria(categoria) {
    const categoriasCollection = getDB().collection("categorias");
    
    const nuevoCategoria = {
        ...categoria
    };

    try {
        const result = await categoriasCollection.insertOne(nuevoCategoria);
        return { ...nuevoCategoria, _id: result.insertedId };
    } catch (error) {
        console.error("Error al agregar categoria:", error);
        return null;
    }
}

async function eliminarCategoria(id) {
    const categoriasCollection = getDB().collection("categorias");
    try {
        const result = await categoriasCollection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0 ? id : null;
    } catch (error) {
        console.error("Error al eliminar categoria:", error); 
        return null;
    }
}


async function obtenerSeriesDeCategoria(idCategoria) {
    const seriesCollection = getDB().collection("series");
    try {
        return await seriesCollection.find({ clientId: idCategoria }).toArray();
    } catch (error) {
        console.error("Error al obtener series:", error);
        return []; 
    }
}



export {
    obtenerCategorias,
    obtenerCategoriaPorId,
    agregarCategoria,
    eliminarCategoria,
    obtenerSeriesDeCategoria
};
