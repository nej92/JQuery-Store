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
        this.guardarProductosLocalStorage(productoAlCarro);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')){
            e.target.parentElement.remove();
            producto = e.target.parentElement;
            productoID = producto.querySelector('a').getAttribute('id');
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaDelCarrito.firstChild){
            listaDelCarrito.removeChild(listaDelCarrito.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

    guardarProductosLocalStorage(productoAlCarro){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(productoAlCarro);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }else{
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.guardarProductosLocalStorage();
        productosLS.forEach (function (productoLS, i){
            if(productoLS.id === productoID){
                productosLS.splice(i, 1);
            }
        });

        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoAlCarro){
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
        });
    }

    vaciarLocalStorage(){
        localStorage.clear();
    }

}