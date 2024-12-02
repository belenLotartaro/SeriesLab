import express from 'express';
import * as serieController from '../controllers/series.controller.js';

const router = express.Router(); 

router.get('/series', serieController.getSeries);
router.get('/series/nuevo', serieController.nuevoSerie);
router.post('/series/nuevo', serieController.agregarSerie);
router.get('/series/ver/:id', serieController.getSerieId);
router.get('/series/modificar/:id', serieController.modificarSerieForm);
router.post('/series/modificar/:id', serieController.modificarSerie);
router.get('/series/eliminar/:id', serieController.eliminarSerie); 



export default router;