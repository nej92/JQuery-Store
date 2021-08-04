for (p of preciosOrdenados ) {
  $('#show-monitor').append(`<button id="productos-aparecidos"> ${p.marca} ${p.precio} </button>`)  
};

//BUSCADOR DE MARCAS
let buscar = document.querySelector('.buscar');
buscar.addEventListener('keypress', e => {
  if ( e.keyCode === 13 ){
    let marca = document.getElementById('buscarPorMarca').value;
    let filtro = grupoMonitores.filter(Monitor => Monitor.marca === marca);
      for (mar of filtro) {
        $('#show-marca').append(
        `<div id="marcas-aparecidas"> 
          <p>${mar.marca}</p>
          <p>$${mar.precio}</p> 
        </div>`);
      }

  };

});