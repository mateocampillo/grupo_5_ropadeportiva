window.addEventListener('load', function() {

    let menuLateral = document.querySelector('#menuLateral');
    let botonMenu = document.querySelector('.header-hamburguesa');

    botonMenu.addEventListener('click', function() {

        if(menuLateral.classList.contains('clase-transicion-entrada')){
            menuLateral.classList.remove('clase-transicion-entrada');
            menuLateral.classList.add('clase-transicion-salida');
        } else {
            menuLateral.classList.add('clase-transicion-entrada');
            menuLateral.classList.remove('clase-transicion-salida');
        }
    })

    let botones = document.querySelectorAll('.boton-categoria')
    let categorias = document.querySelector('#menuLateral-categorias');

    botones.forEach(boton => {

        boton.addEventListener('click', function(evento) {

        if(boton.innerText == 'Hombres'){
            botones[0].style.backgroundColor = '#e67070'
            categorias.innerHTML = `<li><a href="/productos/?categoria=Hombre&tipo=Camiseta">Camisetas</a></li>
            <li><a href="/productos/?categoria=Hombre&tipo=Pantalon">Pantalones</a></li>
            <li><a href="/productos/?categoria=Hombre&tipo=Zapatillas">Zapatillas</a></li>`
        } else if (boton.innerText == 'Mujeres'){
            botones[1].style.backgroundColor = '#e67070'
            categorias.innerHTML = `<li><a href="/productos/?categoria=Mujer&tipo=Camiseta">Camisetas</a></li>
            <li><a href="/productos/?categoria=Mujer&tipo=Pantalon">Pantalones</a></li>
            <li><a href="/productos/?categoria=Mujer&tipo=Zapatillas">Zapatillas</a></li>`
        } else {
            botones[2].style.backgroundColor = '#e67070'
            categorias.innerHTML = `<li><a href="/productos/?categoria=Infantil&tipo=Camiseta">Camisetas</a></li>
            <li><a href="/productos/?categoria=Infantil&tipo=Pantalon">Pantalones</a></li>
            <li><a href="/productos/?categoria=Infantil&tipo=Zapatillas">Zapatillas</a></li>`
        }

        if(categorias.classList.contains('clase-transicion-entrada-categorias')){
            categorias.classList.remove('clase-transicion-entrada-categorias');
            categorias.classList.add('clase-transicion-salida-categorias');
            botones.forEach(boton => {
                boton.style.backgroundColor = 'white'
            })
        } else {
            categorias.classList.add('clase-transicion-entrada-categorias');
            categorias.classList.remove('clase-transicion-salida-categorias');
        }

    })

})
})