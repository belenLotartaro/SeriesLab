import * as serieService from "../services/series.service.js";
import * as categoriaService from "../services/categorias.service.js";
import * as serieView from "../views/series.view.js";

const getSeries = async (req, res) => {
  try {
    const series = await serieService.getSeries();
    res.send(serieView.crearPagina("Listado de series", serieView.crearListadoSeries(series))); 
  } catch (err) {
    res.send(serieView.crearPagina("Error al obtener series", `<p>${err}</p>`));
  }
};



const getSerieId = async (req, res) => {
  const idSerie = req.params.id;

  try {
    const serie = await serieService.getSerieId(idSerie);
    const categoria = await categoriaService.obtenerCategoriaPorId(serie.clientId);
    
    res.send(serieView.crearPagina("Detalle de la serie", serieView.crearDetalleSerie(serie, categoria)));
  } catch (err) {
    res.send(serieView.crearPagina("Error al obtener la serie", `<p>${err.message}</p>`));
  }
};

const nuevoSerie = async (req, res) => {
  try {
      const categorias = await categoriaService.obtenerCategorias();
      res.send(serieView.crearPagina("Nueva Serie", serieView.crearFormularioSerie(categorias)));
  } catch (error) {
      res.send(categoriaView.crearPagina("Error al obtener las categorias", `<p>${error.message}</p>`));
  }
};


const agregarSerie = async (req, res) => { 
  const nuevoSerie = req.body;

  try {
    await serieService.agregarSerie(nuevoSerie);
    res.redirect('/series');
  } catch (err) {
    res.send(serieView.crearPagina("Error al agregar la serie", `<p>${err}</p>`));
  }
};

const eliminarSerie = async (req, res) => {
  const idSerie = req.params.id;

  try {
    await serieService.eliminarSerie(idSerie);
    res.redirect("/series");
  } catch (err) {
    res.send(serieView.crearPagina("Error al eliminar la serie", `<p>${err}</p>`));
  }
};

const modificarSerieForm = async (req, res) => {
  const idSerie = req.params.id;

  try {
    const serie = await serieService.getSerieId(idSerie);
    const categorias = await categoriaService.obtenerCategorias();

    res.send(serieView.crearPagina("Modificar Serie", serieView.modificarForm(serie, categorias)));
  } catch (err) {
    res.send(serieView.crearPagina("Error al modificar la serie", `<p>${err}</p>`));
  }
};

const modificarSerie = async (req, res) => {
  const serieId = req.params.id; 

  const { name, release_date, img, description, rating, creator, clientId } = req.body;

  try {
    await serieService.modificarSerie(serieId, { 
      name,
      release_date,
      img,
      description,
      rating,
      creator, 
      clientId
    });

    res.redirect('/series'); 
  } catch (error) {
    res.send(serieView.crearPagina("Error al modificar la serie", `<p>${error.message}</p>`));
  }
};


export {
  getSeries,
  getSerieId,
  nuevoSerie,
  agregarSerie,
  eliminarSerie,
  modificarSerieForm,
  modificarSerie
};
