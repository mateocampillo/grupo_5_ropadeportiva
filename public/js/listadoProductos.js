window.addEventListener('load', function() {

    let ulProd = document.querySelector('.container-productos')

    let loadProducts = async function() {
        try{
            const resPromise = await fetch('http://localhost:3000/api/productos/');
            let products = await resPromise.json();
            showProducts(products);
        }
        catch (error) {
            console.log(error);
            ulProd.innerHTML = '<li>Ha ocurrido un error con los productos</li>'
        }
    }

    let showProducts = function(products) {
        let htmlString = products.data
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
        ulProd.innerHTML = htmlString;
    };

    loadProducts();

})