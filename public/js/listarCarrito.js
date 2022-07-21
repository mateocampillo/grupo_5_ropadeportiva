window.addEventListener('load', function() {

    let listaCarrito = document.querySelector('#lista-productos-carrito');
    let h2Envio = document.querySelector('.h2-envio');
    let hr = document.querySelector('.hr-1');
    let containerBotones = document.querySelector('.container-botones');
    let containerPrecioTotal = document.querySelector('.container-botones');
    let productosEnCarrito = JSON.stringify(localStorage.getItem('CarritoProductos'));
    let num = productosEnCarrito.match(/\d+/g);
    let totalCompra = document.querySelector('#total-compra');
    let inputTotal = document.querySelector('#inputTotal');
    let arrInputProductos = document.querySelector('#arrInputProductos')

    let loadProducts = async function() {
        try{
            const resPromise = await fetch('http://localhost:3000/api/productos/');
            products = await resPromise.json();
            displayProducts(products.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    let displayProducts = function(products) {

        //Seccion listar el carrito

        if(!localStorage.getItem('CarritoProductos')){

            h2Envio.innerHTML = `<h2>Parece que todavia no tiene objetos en el carrito!</h2>`;
            hr.style.display = 'none';
            listaCarrito.style.display = 'none';
            containerBotones.style.display = 'none';
            listaCarrito.style.display = 'none';
            containerPrecioTotal.style.display = 'none';

        } else {

            let carritoFiltrado = [];
            products.forEach( item => {
                num.forEach( number => {
                    if(number == item.id){
                        carritoFiltrado.push(item);
                    }
                })
            });
    
            let htmlString = carritoFiltrado.map( product => {
                return `
                <li class="container-li">
                        <div class="container-producto">
                            <div><input type="hidden" class="nombre-producto-input" value="${product.name}"></div>
                            <div class="container-imagen"><img class="img-producto" src="/images/ProductDetail/${product.img1}" alt="foto producto"></div>
                            <div class="nombre-producto"><h2>${product.name}</h2></div>
                            <div class="precio-producto"><p>$${product.price}</p></div>
                            <div class="container-botones">
                                <h3 class="cantidad-titulo">Cantidad:</h3>
                                <input class="input-cantidad" value="1" readonly></input>
                            </div>
                            <div class="container-botones"><button class="eliminar-producto">Eliminar</button></div>
                        </div>
                    </li>
                `;
            })
            .join('');
    
            listaCarrito.innerHTML = htmlString;
    
            let contadorPrecioTotal = 0;
            carritoFiltrado.forEach( producto => {
                contadorPrecioTotal = contadorPrecioTotal + producto.price;
            })
            totalCompra.innerHTML = `Total a abonar: $${contadorPrecioTotal}`;
            inputTotal.value = contadorPrecioTotal;
            arrInputProductos.value = JSON.parse(localStorage.getItem('CarritoProductos'))
    
            //Seccion eliminar productos del carrito
    
            let botonesEliminar = document.querySelectorAll('.eliminar-producto');
            botonesEliminar.forEach( boton => {
    
                boton.addEventListener('click', function(event) {
    
                    let nameProductDelete = event.target.parentElement.parentElement.firstChild.nextSibling.firstChild.attributes.value.textContent;
                    let arrCarrito = JSON.parse(localStorage.getItem('CarritoProductos'));
    
                    carritoFiltrado.forEach(product => {
                        if(product.name == nameProductDelete){
                            let idProductDelete = product.id;
    
                            let index = arrCarrito.indexOf(idProductDelete.toString());
                            if(index > -1){
                                arrCarrito.splice(index, 1);
                            }
    
                            if(arrCarrito.length < 1){
                                localStorage.removeItem('CarritoProductos');
                                location.reload();
                            } else if (arrCarrito.length >= 1){
                                localStorage.setItem('CarritoProductos', JSON.stringify(arrCarrito));
                                location.reload();
                            }
                        
                        }
                    })
    
                });
           })
    
        };
        }

    loadProducts();

})