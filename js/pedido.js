const carro = new Carrito();
const carrito = document.getElementById('carrito');
const conteinerProductos = document.getElementById('cont-general');
const listaDelCarrito = document.querySelector('#lista-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');

cargarEventos();

function cargarEventos (){
    conteinerProductos.addEventListener('click', (e) =>{carro.comprarProducto(e)});

    carrito.addEventListener('click', (e)=> {carro.eliminarProducto(e)});

    vaciarCarrito.addEventListener('click', (e) => {carro.vaciarCarrito(e)});

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
}