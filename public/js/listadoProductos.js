window.addEventListener('load', function() {

    let ulProd = document.querySelector('.container-productos');
    let barraBusqueda = document.querySelector('#busqueda');
    let h2 = document.querySelector('h2');
    let h2Categorias = document.querySelector('#categorias-busqueda');
    let products = [];

    barraBusqueda.addEventListener('keyup', function(event) {

        let userSearch = event.target.value.toLowerCase();
        let productsFilteredBusqueda = products.data.filter( product => {
            return product.name.toLowerCase().includes(userSearch);
        });
        displayProductsSearchBar(productsFilteredBusqueda);
    });

    let loadProducts = async function() {
        try{
            const resPromise = await fetch('http://localhost:3000/api/productos/');
            products = await resPromise.json();
            displayProducts(products.data);
        }
        catch (error) {
            console.log(error);
            ulProd.innerHTML = '<li>Ha ocurrido un error con los productos</li>'
        }
    }

    let displayProducts = function(products) {

        let querys = new URLSearchParams(location.search);
        if(querys.has('categoria') && querys.has('tipo')){
            let categorySearch = querys.get('categoria');
            let typeSearch = querys.get('tipo');
            let productsFiltered = products.filter( product => {
                return product.category == categorySearch && product.type == typeSearch;
            });

            if(productsFiltered.length >= 1){
            let htmlString = productsFiltered
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
            h2Categorias.style.display = `block`
            if(categorySearch == 1){
                categorySearch = 'hombre';
            } else if (categorySearch == 2) {
                categorySearch = 'mujer';
            } else if (categorySearch == 3) {
                categorySearch = 'niñx';
            };
            if(typeSearch == 1){
                typeSearch = 'Camisetas';
            } else if (typeSearch == 2) {
                typeSearch = 'Pantalones';
            } else if (typeSearch == 3) {
                typeSearch = 'Zapatillas';
            };
            h2Categorias.innerText = `${typeSearch} de ${categorySearch}`
            } else {
                h2.innerText = ''
                ulProd.innerHTML = '<h1 style="text-align: center;margin: 300px auto 250px;">No hay productos que cumplan con la busqueda</h1>'
                h2Categorias.style.display = `none`
            }

        } else {

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

        }
    };

    let displayProductsSearchBar = function(products) {

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
            h2Categorias.style.display = 'none';
            } else {
                h2.innerText = ''
                ulProd.innerHTML = '<h1 style="text-align: center;margin: 5px 0px;">No hay productos que cumplan con la busqueda</h1>'
                h2Categorias.style.display = 'none';
            }
        };

    loadProducts();

})