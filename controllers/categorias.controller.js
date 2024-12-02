import * as categoriaService from "../services/categorias.service.js";
import * as categoriaView from "../views/categorias.view.js";

const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.obtenerCategorias();
    res.send(categoriaView.crearPagina("Mis Categorias", categoriaView.mostrarCategorias(categorias)));
  } catch (error) {
    res.send(categoriaView.crearPagina("Error al obtener categorias", `<p>${error}</p>`));
  }
};

const nuevoCategoria = (req, res) => {
  res.send(categoriaView.crearPagina("Nueva Categoría", categoriaView.crearFormularioCategoria()));
};

const agregarCategoria = async (req, res) => { 
  const { nombre, foto, descripcion } = req.body;
  const nuevoCategoria = { nombre, foto, descripcion }; 

  try {
    await categoriaService.agregarCategoria(nuevoCategoria);
    res.redirect('/categorias');
  } catch (err) {
    res.send(categoriaView.crearPagina("Error al agregar la categoria", `<p>${err}</p>`));
  }
};

const obtenerSeriesPorCategoria = async (req, res) => {
  const categoriaId = req.params.id; 

  try {
    const categoria = await categoriaService.obtenerCategoriaPorId(categoriaId);
    const series = await categoriaService.obtenerSeriesDeCategoria(categoriaId); 

    if (series.length === 0) {
      return res.send(categoriaView.crearPagina("Series por Categoría", `<h1>Aún no hay series en la categoría ${categoria.nombre}</h1>`));
    }

    res.send(categoriaView.crearPagina(`Series con categoria ${categoria.nombre}`, categoriaView.crearListadoSeriesPorCategoria(series, categoria)));
  } catch (error) {
    res.send(categoriaView.crearPagina("Error al cargar Series de categoria", `<p>${error.message}</p>`));
  }
};

const eliminarCategoria = async (req, res) => {
  const categoriaId = req.params.id;

  try {
    const result = await categoriaService.eliminarCategoria(categoriaId);
    if (result) {
      res.redirect('/categorias'); 
    } else {
      res.send(categoriaView.crearPagina("Error", `<p>No se pudo eliminar la categoria con ID ${categoriaId}</p>`));
    }
  } catch (error) {
    res.send(categoriaView.crearPagina("Error al eliminar la categoria", `<p>${error.message}</p>`));
  }
};

export {
  obtenerCategorias,
  nuevoCategoria,
  agregarCategoria,
  obtenerSeriesPorCategoria,
  eliminarCategoria 
};
