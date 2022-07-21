window.addEventListener('load', function() {

    let botonFinalizarCompra = document.querySelector('.boton-comprar');

    botonFinalizarCompra.addEventListener('click', function(event) {

        localStorage.removeItem('CarritoProductos');
        alert('La compra se ha realizado con exito!');
        
    })

})