window.onload = function(){
    let nombre = document.querySelector('txtName');
    let inputErrNombre = document.querySelector('#InputErrorNombre');
    let apellido = document.querySelector('txtSurname');
    let inputErrApellido = document.querySelector('#InputErrorApellido');
    let email = document.querySelector('txtMail');
    let inputErrEmail = document.querySelector('#InputErrorEmail');
    let nombreUsuario = document.querySelector('txtUser');
    let inputErrNombreUsuario = document.querySelector('#InputErrorNombreUsuario');
    let contraseña = document.querySelector('txtPassword');
    let inputErrContraseña = document.querySelector('#InputErrorContraseña');
    let contraseñaConfirm = document.querySelector('txtPasswordConfirm');
    let inputErrContraseñaConfirm = document.querySelector('#InputErrorContraseñaConfirm');
    let sexo = document.querySelector('radioSex');
    let inputErrSexo = document.querySelector('#InputErrorSexo');
    let telefono = document.querySelector('numberTel');
    let inputErrTelefono = document.querySelector('#InputErrorTelefono');
    let provinciaResidencia = document.querySelector('optProvincias');
    let inputErrProvinciaResidencia = document.querySelector('#InputErrorProvinciaResidencia');
    let domicilio = document.querySelector('txtAddress');
    let inputErrDomicilio = document.querySelector('#InputErrorDomicilio');

    nombre.addEventListener('input', function() {

        if(nombre.value.length == 0){
            inputErrNombre.innerHTML = 'El nombre no puede estar vacio'
        } else {
            inputErrNombre.innerHTML = ''
        }

    })

    apellido.addEventListener('input', function() {

        if(apellido.value.length == 0){
            inputErrApellido.innerHTML = 'El apellido no puede estar vacio'
        } else {
            inputErrApellido.innerHTML = ''
        }

    })

    email.addEventListener('input', function() {

        if(email.value.length == 0){
            inputErrEmail.innerHTML = 'El email no puede estar vacio'
        } else {
            inputErrEmail.innerHTML = ''
        }

    })

    nombreUsuario.addEventListener('input', function() {

        if(nombreUsuario.value.length == 0){
            inputErrNombreUsuario.innerHTML = 'El nombre de usuario no puede estar vacio'
        } else {
            inputErrNombreUsuario.innerHTML = ''
        }

    })

    contraseña.addEventListener('input', function() {

        if(contraseña.value.length < 6){
            inputErrContraseña.innerHTML = 'La contraseña debe tener minimo 6 caracteres'
        } else {
            inputErrContraseña.innerHTML = ''
        }
    })

    contraseñaConfirm.addEventListener('input', function() {

        if(contraseña.value == contraseña.value.length){
            inputErrContraseñaConfirm.innerHTML = 'Las contraseñas no coinciden'
        } else {
            inputErrContraseñaConfirm.innerHTML = ''
        }

    })

    sexo.addEventListener('input', function() {
        
        if(sexo.value != 1 && sexo.value != 2 && sexo.value != 3){
            inputErrSexo.innerHTML = 'El sexo no puede estar vacio'
        } else {
            inputErrSexo.innerHTML = ''
        }
    })

    telefono.addEventListener('input', function() {
        
        if(telefono.value.length == 0){
            inputErrTelefono.innerHTML = 'El telefono no puede estar vacio'
        } else {
            inputErrTelefono.innerHTML = ''
        }
    })

    provinciaResidencia.addEventListener('input', function() {
        
        if(telefono.value > 24 &&  telefono.value < 1 ){
            inputErrProvinciaResidencia.innerHTML = 'La provincia de residencia no puede estar vacia'
        } else {
            inputErrProvinciaResidencia.innerHTML = ''
        }
    })

    

    domicilio.addEventListener('input', function() {
        
        if(domicilio.value.length == 0){
            inputErrDomicilio.innerHTML = 'El domicilio no puede estar vacio'
        } else {
            inputErrDomicilio.innerHTML = ''
        }
    })


}