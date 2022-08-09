window.addEventListener('load', function() {

    let flechaIzquierda = document.querySelector('.main-producto-destacado-icono-flecha-izquierda');
    let flechaDerecha = document.querySelector('.main-producto-destacado-icono-flecha-derecha');
    let imgCarousel = document.querySelector('.main-producto-destacado-imagen');
    let nombreCarousel = document.querySelector('.main-producto-destacado-nombre');
    let hrefCarousel = document.querySelector('.main-producto-destacado-etiqueta-a');
    let indexInput = document.querySelector('.main-producto-destacado-index');
    let index = parseInt(indexInput.value);

    let imagenes = [
        {
            id: 6,
            ruta: '/images/Index/img-cai.jpg',
            nombre: 'Camiseta de Independiente'
        },
        {
            id: 8,
            ruta: '/images/Index/juventuscamiseta.jpg',
            nombre: 'Camiseta Juventus'
        },
        {
            id: 1,
            ruta: '/images/Index/camisetarivergrande.jpg',
            nombre: 'Camiseta River Plate'
        }
    ]

    flechaDerecha.addEventListener('click', function() {

        let i = index + 1;
        index = i
        if(index > 2){index = 0}
        imgCarousel.src = imagenes[index].ruta;
        nombreCarousel.innerHTML = imagenes[index].nombre;
        hrefCarousel.href = `/productos/detalle/${imagenes[index].id}`
        
    })

    flechaIzquierda.addEventListener('click', function() {

        let i = index - 1;
        index = i
        if(index < 0){index = 2}
        imgCarousel.src = imagenes[index].ruta;
        nombreCarousel.innerHTML = imagenes[index].nombre;
        hrefCarousel.href = `/productos/detalle/${imagenes[index].id}`
        
    })

})