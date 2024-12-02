import express from 'express';
import * as categoriaController from '../controllers/categorias.controller.js';

const router = express.Router();

router.get('/categorias', categoriaController.obtenerCategorias);
router.get('/categorias/nuevo', categoriaController.nuevoCategoria);
router.post('/categorias/nuevo', categoriaController.agregarCategoria);
router.get('/categorias/:id/series', categoriaController.obtenerSeriesPorCategoria); 
router.get('/categorias/eliminar/:id', categoriaController.eliminarCategoria);

export default router;     