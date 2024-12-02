
export function crearPagina(titulo, contenido) {
    return ` 
  <!DOCTYPE html>
  <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${titulo}</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          </head>

            <style>
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
                    background-color: #005F99; 
                    padding-left: 30px;
                    padding-right: 30px;
                }
                .navbar a {
                    color: whitesmoke; 
                }
                .navbar a:hover {
                    color: #B3E5FC; 
                }
                body {
                    background-color: #1c1c1c;
                }
                h1 {
                    text-align: left;
                    padding-top: 100px;
                    padding-bottom: 50px;
                    color: whitesmoke;
                }
                .card {
                    border-radius: 5px;
                    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); 
                    transition: all 0.3s ease; 
                    background-color: #005F99;
                    color: whitesmoke;
                }
                    
                .card:hover {
                    transform: scale(1.05); /* Hace que la card se agrande un 5% */
                    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.3); /* Sombra más intensa */
                }
                .card a {
                    margin-top: 5px;
                    width: 80%;
                }
                .card-title {
                    padding-bottom: 5px; 
                }
                .card img {
                    border-radius: 5px 5px 0 0;
                    margin-bottom: 10px;
                }

                .form-label {
                    color: whitesmoke;
                }

                .btn-form {
                    background-color: #6dbf66; 
                    color: white; 
                    font-size: 1.2rem; 
                    padding: 10px 20px; 
                    border: none; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    text-decoration: none;
                }

                .btn-form:hover {
                    background-color: #6dbf66;
                    color: white;
                }

                table.custom-table {
                    border: 3px solid #1c1c1c !important;
                }

                table.custom-table th, td {
                    background-color: #005F99 !important;
                    color: whitesmoke !important;
                }

                .btn-editar {
                    background-color: #6dbf66; 
                    color: white; 
                    font-size: 1.2rem; 
                    padding: 10px 20px; 
                    border: none; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    text-decoration: none;
                }

                .btn-editar:hover {
                    background-color: #6dbf66; 
                    color: white; 
                }
                    
                .btn-eliminar {
                    background-color: #bf6666; 
                    color: white; 
                    font-size: 1.2rem; 
                    padding: 10px 20px; 
                    border: none; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    text-decoration: none;
                } 

                .btn-eliminar:hover {
                    background-color: #bf6666; 
                    color: white; 
                }
                    
                .btn-atras {
                    background-color: #6699bf; 
                    color: white; 
                    font-size: 1.2rem; 
                    padding: 10px 20px; 
                    border: none; 
                    border-radius: 5px; 
                    cursor: pointer; 
                    text-decoration: none;
                }   

                .btn-atras:hover {
                    background-color: #6699bf; 
                    color: white; 
                } 
                    
                .btn-container {
                    display: flex;
                    gap: 10px;
                }

            </style>

      <body>  
          <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href='/series/'>SeriesLab</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <a href="/series" class="btn ms-auto me-2">Series</a>
                <span class="text-white mx-2">|</span>
                <a href="/categorias" class="btn ms-2 me-2">Categorías</a> 
              </div>
            </nav>

          <div class="container mt-4"> 
              ${contenido} 
          </div> 

          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
  </html>
  `;
}



export function mostrarCategorias(categorias) {
    let html = "";

    html += '<div class="mb-3" style="margin-top: 30px;">';

    html += `<div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <h1 style="margin-y: auto;">Mis Categorías</h1>
        <a href="/categorias/nuevo" 
           style="background-color: #6dbf66; color: white; 
                  font-size: 1.2rem; padding: 10px 20px; margin-y: auto; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">
            Agregar Categoría
        </a>
    </div>`;

    html += '<table class="table table-bordered mt-4 custom-table">';
    html += '<thead><tr><th>Foto</th><th>Nombre</th><th>Descripción</th><th>Series</th><th>Opciones</th></tr></thead><tbody>';

    categorias.forEach(categoria => {
        html += `<tr>
                  <td><img src="${categoria.foto}" alt="Imagen de ${categoria.nombre}" width="100"></td>
                  <td>${categoria.nombre}</td>
                  <td>${categoria.descripcion}</td>
                  <td><a href="/categorias/${categoria._id}/series" class="btn btn-editar">Ver Series</a></td>
                  <td>
                     <a href="/categorias/eliminar/${categoria._id}" class="btn btn-eliminar">Eliminar Categoría</a>
                  </td> 
               </tr>`;
    }); 

    html += '</tbody></table>';
    return html;
}



export function crearFormularioCategoria() {
    return `
    <h1>Agregar Categoría</h1>
    <form action="/categorias/nuevo" method="post" class="form-group">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" name="nombre" class="form-control" required>
        </div>

        <div class="mb-3">
            <label for="foto" class="form-label">Imagen URL</label>
            <input type="text" name="foto" class="form-control" required>
        </div>

        <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción</label>
            <textarea name="descripcion" class="form-control" required></textarea>
        </div>

        <button type="submit" class="btn btn-editar">Agregar</button>
        <a href="/categorias" class="btn btn-atras">Atrás</a>
    </form>
  `;
}



export function crearListadoSeriesPorCategoria(series, categoria) {

    let html = "";
    html += '<div class="mb-3">';
    html += `<h1>${categoria.nombre}</h1>`;
    html += '</div>';
    html += '<div class="row">';

    series.forEach(serie => {
        html += `
            <div class="col-md-3 mb-4">
                <a href="/series/ver/${serie._id}" class="card text-decoration-none"> 
                    
                        <img src="${serie.img}" class="card-img-top" alt="Portada de la serie">
                    <div class="card-body">
                        <h5 class="card-title">${serie.name}</h5>
                    </div>
                </a>
            </div>`;
    });

    html += '</div>';
    return html;
}