window.addEventListener('load', function() {

    let nombre = document.querySelector('#txtName');
    let inputErrNombre = document.querySelector('#InputErrorNombre');
    let apellido = document.querySelector('#txtSurname');
    let inputErrorApellido = document.querySelector('#InputErrorApellido');
    let email = document.querySelector('#txtMail');
    let inputErrorEmail = document.querySelector('#InputErrorEmail');
    let username = document.querySelector('#txtUser');
    let inputErrorUsername = document.querySelector('#InputErrorNombreUsuario');
    let password = document.querySelector('#txtPassword');
    let inputErrorPassword = document.querySelector('#InputErrorContraseña');
    let confirmPassword = document.querySelector('#txtPasswordConfirm');
    let inputErrorConfirmPassword = document.querySelector('#InputErrorContraseñaConfirm');
    let telefono = document.querySelector('#numberTel');
    let inputErrorTelefono = document.querySelector('#InputErrorTelefono');
    let domicilio = document.querySelector('#txtAddress');
    let inputErrorDomicilio = document.querySelector('#InputErrorDomicilio');
    let postal = document.querySelector('#txtPostal');
    let inputErrorPostal = document.querySelector('#InputErrorPostal');

    nombre.addEventListener('input', function() {

        if(nombre.value.length == 0){
            inputErrNombre.innerHTML = "El nombre no puede estar vacio"
        } else {
            inputErrNombre.innerHTML = ''
        }
    })

    apellido.addEventListener('input', function() {

        if(apellido.value.length == 0){
            inputErrorApellido.innerHTML = "El apellido no puede estar vacio"
        } else {
            inputErrorApellido.innerHTML = ''
        }
    })

    email.addEventListener('input', function() {

        if(email.value.length == 0){
            inputErrorEmail.innerHTML = "El mail no puede estar vacio"
        } else if(!email.value.includes('@')) {
            inputErrorEmail.innerHTML = "Debes introducir un email valido"
        } else {
            inputErrorEmail.innerHTML = ''
        }
    })

    username.addEventListener('input', function() {

        if(username.value.length == 0){
            inputErrorUsername.innerHTML = "El nombre de usuario no puede estar vacio"
        } else if(username.value.length < 6){
            inputErrorUsername.innerHTML = "El nombre de usuario no puede ser menor a 6 caracteres"
        } else if(username.value.length > 30) {
            inputErrorUsername.innerHTML = "El nombre de usuario no puede ser mayor a 30 caracteres"
        } else {
            inputErrorUsername.innerHTML = ''
        }
    })

    password.addEventListener('input', function() {

        if(password.value.length == 0){
            inputErrorPassword.innerHTML = "La contraseña no puede estar vacia"
        } else if(password.value.length < 6){
            inputErrorPassword.innerHTML = "La contraseña no puede ser menor a 6 caracteres"
        } else if(password.value.length > 24) {
            inputErrorPassword.innerHTML = "La contraseña no puede ser mayor a 24 caracteres"
        } else {
            inputErrorPassword.innerHTML = ''
        }
    })
    
    confirmPassword.addEventListener('input', function() {

        if(confirmPassword.value.length == 0){
            inputErrorConfirmPassword.innerHTML = "La contraseña no puede estar vacia"
        } else if(confirmPassword.value != password.value){
            inputErrorConfirmPassword.innerHTML = "Ambas contraseñas deben coincidir"
        } else if(confirmPassword.value.length < 6){
            inputErrorConfirmPassword.innerHTML = "La contraseña no puede ser menor a 6 caracteres"
        } else if(confirmPassword.value.length > 24) {
            inputErrorConfirmPassword.innerHTML = "La contraseña no puede ser mayor a 24 caracteres"
        } else {
            inputErrorConfirmPassword.innerHTML = ''
        }
    })

    telefono.addEventListener('input', function() {

        if(telefono.value.length == 0){
            inputErrorTelefono.innerHTML = "El telefono no puede estar vacio"
        } else if(telefono.value.length < 8) {
            inputErrorTelefono.innerHTML = "El telefono debe ser mayor a 8 caracteres"
        } else if(telefono.value.length > 14){
            inputErrorTelefono.innerHTML = "El telefono debe ser menor a 14 caracteres"
        } else {
            inputErrorTelefono.innerHTML = ''
        }
    })

    domicilio.addEventListener('input', function() {

        if(domicilio.value.length == 0){
            inputErrorDomicilio.innerHTML = "El domicilio no puede estar vacio"
        } else {
            inputErrorDomicilio.innerHTML = ''
        }
    })

    postal.addEventListener('input', function() {

        if(postal.value.length == 0){
            inputErrorPostal.innerHTML = "El codigo postal no puede estar vacio"
        } else {
            inputErrorPostal.innerHTML = ''
        }
    })

})