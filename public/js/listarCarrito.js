window.addEventListener('load', function() {

    let listaCarrito = document.querySelector('#lista-productos-carrito');
    let productosEnCarrito = JSON.stringify(localStorage.getItem('CarritoProductos'));
    let num = productosEnCarrito.match(/\d+/g);
    let totalCompra = document.querySelector('#total-compra');

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
                        <div class="container-imagen"><img class="img-producto" src="/images/ProductDetail/${product.img1}" alt="foto producto"></div>
                        <div class="nombre-producto"><h2 >${product.name}</h2></div>
                        <div class="precio-producto"><p>$${product.price}</p></div>
                        <div class="container-botones">
                            <h3 class="cantidad-titulo">Cantidad:</h3>
                            <input class="input-cantidad" value="1" min="1" max="5"></input>
                        </div>
                        <div class="container-botones"><button class="eliminar-producto">Eliminar</button></div>
                    </div>
                </li>
            `;
        })
        .join('');

        let contadorPrecioTotal = 0;
        carritoFiltrado.forEach( producto => {
            contadorPrecioTotal = contadorPrecioTotal + producto.price;
        })
        totalCompra.innerHTML = `Total a abonar: $${contadorPrecioTotal}`;

        listaCarrito.innerHTML = htmlString;
    };

    loadProducts();

})