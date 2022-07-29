window.onload = function(){
    let nombreProducto = document.querySelector('txtAddName');
    let inputErrProducto = document.querySelector('#InputErrorProducto');
    let descripcion = document.querySelector('txtAddDesc');
    let inputErrDescripcion = document.querySelector('#InputErrorDescripcion');
    let categoria = document.querySelector('radioAddCat');
    let inputErrCategoria = document.querySelector('#InputErrorCategoria');
    let precio = document.querySelector('numAddPrice');
    let inputErrPrecio = document.querySelector('#InputErrorPrecio');
    let tipo = document.querySelector('radioAddType');
    let inputErrTipo = document.querySelector('#InputErrorTipo');
    let talle = document.querySelector('radioAddSize');
    let inputErrTalle = document.querySelector('#InputErrorTalle');
    let tela = document.querySelector('radioAddCloth');
    let inputErrTela = document.querySelector('#InputErrorTela');
    let color = document.querySelector('radioAddColor');
    let inputErrColor = document.querySelector('#InputErrorColor');
    let codigo = document.querySelector('txtAddCode');
    let inputErrCodigo = document.querySelector('#InputErrorCodigo');

    nombreProducto.addEventListener('input', function() {

        if(nombreProducto.value.length < 5){
            inputErrProducto.innerHTML = "El campo de nombre de producto tiene menos de 5 caracteres"
        } else {
            inputErrProducto.innerHTML = ''
        }
    })

    descripcion.addEventListener('input', function() {

        if(descripcion.value.length < 20){
            inputErrDescripcion.innerHTML = "El campo de nombre de producto tiene menos de 20 caracteres"
        } else {
            inputErrDescripcion.innerHTML = ''
        }
    })

    categoria.addEventListener('input', function() {

        if(categoria.value != 1 && categoria.value != 2 && categoria.value != 3){
            inputErrCategoria.innerHTML = "El campo de categoria esta vacio"
        } else {
            inputErrCategoria.innerHTML = ''
        }
    })

    precio.addEventListener('input', function() {

        if(precio.value.length == 0){
            inputErrPrecio.innerHTML = 'El precio no puede estar vacio'
        } else {
            inputErrPrecio.innerHTML = ''
        }
    })

    tipo.addEventListener('input', function() {

        if(tipo.value != 1 && tipo.value != 2 && tipo.value != 3 && tipo.value != 4){
            inputErrTipo.innerHTML = "El campo de tipo de categoria esta vacio"
        } else {
            inputErrTipo.innerHTML = ''
        }
    })

    precio.addEventListener('input', function() {

        if(precio.value.length == 0){
            inputErrPrecio.innerHTML = 'El precio no puede estar vacio'
        } else {
            inputErrPrecio.innerHTML = ''
        }
    })

    talle.addEventListener('input', function() {

        if(telefono.value > 10 &&  telefono.value < 1 ){
            inputErrTalle.innerHTML = "El campo de talle esta vacio"
        } else {
            inputErrTalle.innerHTML = ''
        }
    })

    tela.addEventListener('input', function() {

        if(tela.value > 6 &&  tela.value < 1 ){
            inputErrTela.innerHTML = "El campo de tela esta vacio"
        } else {
            inputErrTela.innerHTML = ''
        }
    })

    color.addEventListener('input', function() {

        if(color.value > 4 &&  color.value < 1 ){
            inputErrColor.innerHTML = "El campo de color esta vacio"
        } else {
            inputErrColor.innerHTML = ''
        }
    })

    codigo.addEventListener('input', function() {

        if(codigo.value.length == 0){
            inputErrCodigo.innerHTML = "El campo de codigo esta vacio"
        } else {
            inputErrCodigo.innerHTML = ''
        }
    })    
}