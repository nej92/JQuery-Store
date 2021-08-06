class Carrito {
    //Añadir producto al carro
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const productoAlCarro = e.target.parentElement;
            this.leerDatosProducto(productoAlCarro);
        }
    }


leerDatosProducto(productoAlCarro){
    const infoProducto = {
        img : productoAlCarro.querySelector('img').src,
        marca : productoAlCarro.querySelector('.marca').textContent,
        precio : productoAlCarro.querySelector('.precio').textContent,
        cantidad : 1
    }
    this.insertarEnCarrito(infoProducto);

}

insertarEnCarrito(productoAlCarro){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${productoAlCarro.img}" width=50>
    </td>
    <td>${productoAlCarro.marca}</td>
    <td>${productoAlCarro.precio}</td>
     <a href="#" class="borrar-producto" id="${productoAlCarro.id}">X</a>
    `;
    listaDelCarrito.appendChild(row);
}

}