import express from "express";
import seriesRoute from "./routes/series.routes.js";
import categoriasRoute from "./routes/categorias.routes.js";
import { connectDB } from "./config/db.js";

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use((req, res, next) => {
    console.log(`Método: ${req.method}, URL: ${req.url}`);
    next();
  });


connectDB().then(() => {

    app.use(seriesRoute);
    app.use(categoriasRoute);

    app.use((req, res, next) => {
        res.status(404).json({ message: "Ruta no encontrada" });
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ message: "Error en el servidor" });
    });

    app.listen(3333);
})
