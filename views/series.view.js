
export function crearPagina(titulo, contenido) {
    return ` 
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SeriesLab</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            
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

        </head> 
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
 


export function crearListadoSeries(series) {
    let html = "";
    html += '<div class="mb-3" style="margin-top: 30px;">';
    html += `
    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
        <h1 style="margin-y: auto;">Mis Series</h1>
        <a href="/series/nuevo" 
           style="background-color: #6dbf66; color: white; 
                  font-size: 1.2rem; padding: 10px 20px; margin-y: auto; border: none; border-radius: 5px; cursor: pointer; text-decoration: none;">
            Agregar Serie
        </a>
    </div>
`;

    html += '<div class="row">';

    if (series.length === 0) {
        html += '<p>No hay series</p>'; 
    } else {
        series.forEach(serie => {
            html += `
                <div class="col-md-3 mb-4">
                    <a href="/series/ver/${serie._id}" class="card text-decoration-none"> 
                        
                            <img src="${serie.img}" class="card-img-top" alt="Portada de la serie">
                        <div class="card-body">
                            <h5 class="card-title">${serie.name}</h5>
                        </div>
                    </a>
                </div>
                
                `;
        });
    }

    html += '</div>';
    return html;
}


export function crearFormularioSerie(categorias) {
    let html = `
      <h1>Agregar Serie</h1>
      <form action='/series/nuevo' method='post' class='form-group row'>
          <div class='mb-3 col'> 
              <label for='name' class='form-label'>Nombre:</label>
              <input type='text' name='name' class='form-control' required>
          </div>

          <div class='mb-3 col'>
              <label for='release_date' class='form-label'>Lanzamiento:</label>
              <input type='text' name='release_date' class='form-control' required>
          </div>

          <div class='mb-3 col'>
              <label for='clientId' class='form-label'>Categoría:</label>
              <select name='clientId' class='form-select' required>
                  <option value=''>Seleccione una categoría</option>
                  ${categorias.map(categoria => `<option value='${categoria._id}'>${categoria.nombre}</option>`).join('')}
              </select>
          </div>

          <div class='mb-3 col'>
              <label for='img' class='form-label'>Imagen URL:</label>
              <input type='text' name='img' class='form-control' required> 
          </div>
  
          <div class='mb-3'>
              <label for='description' class='form-label'>Descripción:</label>
              <input type='text' name='description' class='form-control' required>
          </div>
  
          <div class='mb-3 col'>
              <label for='rating' class='form-label'>Puntaje:</label>
              <input type='text' name='rating' class='form-control' required>
          </div>

          <div class='mb-3 col'>
              <label for='creator' class='form-label'>Creador:</label>
              <input type='text' name='creator' class='form-control' required>
          </div>
        
          <div class="btn-container">
                <button type='submit' class='btn btn-form'>Agregar</button>
                <a href="/series" class="btn btn-atras">Cancelar</a>
          </div>
      </form>
    `;
    return html;
}



export function crearDetalleSerie(serie, categoria) {
    let html = `<h1>Detalle de la serie</h1>`;
    html += `
        <table class="table table-bordered custom-table" >
            <tbody>
            <tr>
                <th>Nombre</th>
                <td>${serie.name}</td> 
            </tr>
            <tr>
                <th>Lanzamiento</th>
                <td>${serie.release_date}</td>
            </tr>
            <tr>
                <th>Categoría</th>
                <td>${categoria ? categoria.nombre : 'No asignado'}</td>
            </tr>
            <tr>
                <th>Imagen</th>
                <td><img src="${serie.img}" alt="Imagen de la serie" width="200"></td>
            </tr>
            <tr>
                <th>Descripción</th>
                <td>${serie.description}</td>
            </tr>
            <tr>
                <th>Puntaje</th>
                <td>${serie.rating}</td>
            </tr>
            <tr>
                <th>Creador</th>
                <td>${serie.creator}</td>
            </tr>
        </tbody>
        </table>
    `;

    html += `
        <div class="mt-4 mb-4">
            <a href="/series/modificar/${serie._id}" class="btn btn-editar">Editar</a>
            <a href="/series/eliminar/${serie._id}" class="btn btn-eliminar">Eliminar</a>
            <a href="/series" class="btn btn-atras">Atrás</a>
        </div>
    `;
    return html;
} 



export function modificarForm(serie, categorias) {
    let html = "<h1>Editar Serie</h1>";
    html += `<form action='/series/modificar/${serie._id}' method='post' class="mt-4 row">`;
    html += `
        <div class="mb-3 col">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" name="name" value="${serie.name}" required>
        </div>

         <div class="mb-3 col">
            <label for="release_date" class="form-label">Lanzamiento</label>
            <input type="text" class="form-control" name="release_date" value="${serie.release_date}" required>
        </div>

        <div class="mb-3 col">
            <label for="clientId" class="form-label">Categoría</label>
            <select name="clientId" class="form-select" required>
                <option value="">Seleccione la categoría</option>
                ${categorias.map(categoria => `
                    <option value="${categoria._id}" ${categoria._id === serie.clientId ? 'selected' : ''}>${categoria.nombre}</option>
                `).join('')}
                ${categorias.map(categoria => `<option value='${categoria._id}'>${categoria.nombre}</option>`).join('')}
            </select>
        </div>

        <div class="mb-3 col">
            <label for="img" class="form-label">Imagen URL</label>
            <input type="url" class="form-control" name="img" value="${serie.img}" required>
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Descripción</label>
            <input type="text" class="form-control" name="description" value="${serie.description}" required>
        </div>

        <div class="mb-3 col">
            <label for="rating" class="form-label">Puntaje</label>
            <input type="text" class="form-control" name="rating" value="${serie.rating}" required>
        </div>

        <div class="mb-3 col">
            <label for="creator" class="form-label">Creador</label>
            <input type="text" class="form-control" name="creator" value="${serie.creator}" required>
        </div>
        
        <div class="btn-container">
            <button type="submit" class="btn btn-editar">Aplicar cambios</button>
            <a href="/series" class="btn btn-atras">Cancelar</a>
        </div>
    `;
    html += "</form>";
    return html;
}