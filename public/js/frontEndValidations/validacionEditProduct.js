window.addEventListener('load', function() {

    let nombreProducto = document.querySelector('#txtNuevoName');
    let inputErrProducto = document.querySelector('#InputErrorNombre');
    let descripcion = document.querySelector('#txtNuevoDesc');
    let inputErrDescripcion = document.querySelector('#InputErrorDescripcion');
    let precio = document.querySelector('#numNuevoPrice');
    let inputErrPrecio = document.querySelector('#InputErrorPrecio');
    let codigo = document.querySelector('#txtNuevoCode');
    let inputErrCodigo = document.querySelector('#InputErrorCodigo');

    nombreProducto.addEventListener('input', function() {

        if(nombreProducto.value.length == 0){
            inputErrProducto.innerHTML = "El nombre no puede estar vacio"
        } else if(nombreProducto.value.length < 5){
            inputErrProducto.innerHTML = "El nombre no puede ser menor a 5 caracteres"
        } else {
            inputErrProducto.innerHTML = ''
        }
    })

    descripcion.addEventListener('input', function() {

        if(descripcion.value.length == 0){
            inputErrDescripcion.innerHTML = "La descripcion no puede estar vacia"
        } else if(descripcion.value.length < 20){
            inputErrDescripcion.innerHTML = "La descripcion no puede ser menor a 20 caracteres"
        } else {
            inputErrDescripcion.innerHTML = ''
        }
    })

    precio.addEventListener('input', function() {

        if(precio.value.length == 0){
            inputErrPrecio.innerHTML = 'El precio no puede estar vacio'
        } else {
            inputErrPrecio.innerHTML = ''
        }
    })

    codigo.addEventListener('input', function() {

        if(codigo.value.length == 0){
            inputErrCodigo.innerHTML = "El codigo no puede estar vacio"
        } else if(codigo.value.length < 5){
            inputErrCodigo.innerHTML = "El codigo no puede ser menor a 5 caracteres"
        } else {
            inputErrCodigo.innerHTML = ''
        }
    })
    
})