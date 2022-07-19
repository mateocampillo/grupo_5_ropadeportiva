window.addEventListener('load', function() {

    let botonAgregarCompra = document.querySelector('#agregar-producto');

    botonAgregarCompra.addEventListener('click', function(event) {

        event.preventDefault();

        let idProducto = location.href.split('/').slice(-1).toString();
        if(!localStorage.getItem('CarritoProductos')){
            let arrProductos = [];
            arrProductos.push(idProducto);
            localStorage.setItem('CarritoProductos', JSON.stringify(arrProductos));
            location.href = 'http://localhost:3000/';
        } else if(localStorage.getItem('CarritoProductos').includes(idProducto)){
            alert('Ya tienes este producto en tu carrito de compras!');
        } else {
            let storageProductos = JSON.parse(localStorage.getItem('CarritoProductos'));
            storageProductos.push(idProducto);
            localStorage.setItem('CarritoProductos', JSON.stringify(storageProductos));
            location.href = 'http://localhost:3000/';
        }

    })

})