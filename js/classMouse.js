class Mouse{
    constructor(precio, marca, resolucion, tamaño){
      this.precio=precio;
      this.marca=marca;
      this.resolucion=resolucion;
      this.tamaño=tamaño;
    }
  
    mostrar(){
      console.log(this.marca, this.precio, this.resolucion, this.tamaño);
    }
}

const grupoMouse = [];

grupoMouse.push (new Mouse (1500, "Samsung", "1920x1080", "19'' "));
grupoMouse.push (new Mouse (3000, "Dell", "1680x1050", "22'' "));
grupoMouse.push (new Mouse (2000, "Lenovo", "1920x1080", "20'' "));
grupoMouse.push (new Mouse (1500, "Lenovo", "1680x1050", "19'' "));
grupoMouse.push (new Mouse (8000, "LG", "3840x2160","24'' "));
grupoMouse.push (new Mouse (4000, "LG", "1920x1080","22'' "));
grupoMouse.push (new Mouse (6500, "LG", "1920x1080","24'' "));
grupoMouse.push (new Mouse (6000, "Samsung", "3840x2160","24'' "));
grupoMouse.push (new Mouse (3250, "Samsung", "1680x1050","19'' "));
grupoMouse.push (new Mouse (3500, "Samsung", "1920x1080","22'' "));


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