window.addEventListener('load', function() {

    let email = document.querySelector('#txtRecEmail');
    let inputErrEmail = document.querySelector('#inputErrorUserRecEmail');
    let telefono = document.querySelector('#txtRecTel');
    let inputErrTelefono = document.querySelector('#InputErrorUserRecTelefono');
    let contraseña = document.querySelector('#txtRecPass');
    let inputErrContraseña = document.querySelector('#InputErrorUserRecContraseña');
    let recContraseña = document.querySelector('#txtRecPassConfirm'); 
    let inputErrContraseñaConfirm = document.querySelector('#InputErrorUserRecContraseñaConfirm');

    email.addEventListener('input', function() {

        if(email.value.length == 0){
            inputErrEmail.innerHTML = 'El email no puede estar vacio'
        } else {
            inputErrEmail.innerHTML = ''
        }

    })

    telefono.addEventListener('input', function() {

        if(telefono.value.length == 0){
            inputErrTelefono.innerHTML = 'El telefono no puede estar vacio'
        } else {
            inputErrTelefono.innerHTML = ''
        }

    })

    contraseña.addEventListener('input', function() {

        if(contraseña.value.length == 0){
            inputErrContraseña.innerHTML = 'La contraseña no puede estar vacia'
        } else if(contraseña.value.length < 6){
            inputErrContraseña.innerHTML = 'La contraseña debe ser mayor a 6 caracteres'
        } else {
            inputErrContraseña.innerHTML = ''
        }

    })

    recContraseña.addEventListener('input', function() {

        if(recContraseña.value.length == 0){
            inputErrContraseñaConfirm.innerHTML = 'La contraseña no puede estar vacia'
        } else if(recContraseña.value.length < 6){
            inputErrContraseñaConfirm.innerHTML = 'La contraseña debe ser mayor a 6 caracteres'
        } else if(recContraseña.value != contraseña.value){
            inputErrContraseñaConfirm.innerHTML = 'Las contraseñas no coinciden'
        } else {
            inputErrContraseñaConfirm.innerHTML = ''
        }

    })

})