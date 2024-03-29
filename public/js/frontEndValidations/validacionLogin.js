window.addEventListener('load', function() {

    let email = document.querySelector('#emailUserEmail');
    let contraseña = document.querySelector('#txtPassword');
    let inputErrEmail = document.querySelector('#inputErrorEmailUserEmail');
    let inputErrTxtPassword = document.querySelector('#inputErrorTxtPassword');
        
        email.addEventListener('input', function() {

            if(email.value.length == 0){
                inputErrEmail.innerHTML = 'El email no puede estar vacio'
            } else if(!email.value.includes('@')) {
                inputErrEmail.innerHTML = "Debes introducir un email valido"
            } else {
                inputErrEmail.innerHTML = ''
            }

        })

        contraseña.addEventListener('input', function() {

            if(contraseña.value.length < 6){
                inputErrTxtPassword.innerHTML = 'La contraseña debe tener minimo 6 caracteres'
            } else {
                inputErrTxtPassword.innerHTML = ''
            }

        })

})