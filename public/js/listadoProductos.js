window.addEventListener('load', function() {

    let ulProd = document.querySelector('.container-productos');
    let barraBusqueda = document.querySelector('#busqueda');
    let h2 = document.querySelector('h2');
    let products = [];

    barraBusqueda.addEventListener('keypress', function(event) {

        let userSearch = event.target.value.toLowerCase();
        let productsFiltered = products.data.filter( product => {
            return product.name.toLowerCase().includes(userSearch);
        });
        console.log(productsFiltered);
        displayProducts(productsFiltered);
    });

    let loadProducts = async function() {
        try{
            const resPromise = await fetch('http://localhost:3000/api/productos/');
            products = await resPromise.json();
            console.log(products);
            displayProducts(products.data);
        }
        catch (error) {
            console.log(error);
            ulProd.innerHTML = '<li>Ha ocurrido un error con los productos</li>'
        }
    }

    let displayProducts = function(products) {
        if(products.length >= 1){
            let htmlString = products
            .map((product) => {
                return `
                <li>
                    <a href="/productos/detalle/${product.id}">
                        <div class="container-imagen"><img src="/images/ProductDetail/${product.img1}" alt="Imagen"></div>
                        <div><p>$ ${product.price}</p></div>
                        <div><h3>${product.name}</h3></div>
                    </a>
                </li>
            `;
            })
            .join('');
        h2.innerText = 'Listado general de productos'
        ulProd.innerHTML = htmlString;
        } else {
            h2.innerText = ''
            ulProd.innerHTML = '<h1 style="text-align: center;margin: 5px 0px;">No hay productos que cumplan con la busqueda</h1>'
        }
    };

    loadProducts();

})