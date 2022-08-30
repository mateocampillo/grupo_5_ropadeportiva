window.addEventListener('load', function() {

    let imagenMain = document.querySelector('#imagen-principal');
    let imgSec = document.querySelectorAll('.imgsec');

    imgSec[0].style.boxShadow = '0px 0px 10px rgb(100, 100, 100)';

    imgSec.forEach(imagen => {

        imagen.addEventListener('click', function() {

            imgSec.forEach(imagen => {
                imagen.style.boxShadow = 'none';
            })
            imagenMain.src = imagen.src;
            imagen.style.boxShadow = '0px 0px 10px rgb(100, 100, 100)';

        })

    })

})