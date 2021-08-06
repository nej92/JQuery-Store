const carro = new Carrito();
const carrito = document.getElementById('carrito');
const ConteinerProductos = document.getElementById('cont-general');
const listaDelCarrito = document.querySelector('#lista-carrito');

cargarEventos();

function cargarEventos (){
    ConteinerProductos.addEventListener('click', (e) =>{carro.comprarProducto(e)});
}