window.onload = function(){
    let formulario = document.querySelector('form.formulario-container');
    let nombre = document.querySelector('txtName');
    let apellido = document.querySelector('txtSurname');
    let email = document.querySelector('txtMail');
    let nombreUsuario = document.querySelector('txtUser');
    let contraseña = document.querySelector('txtPassword');
    let fechaNacimiento = document.querySelector('dateCumple');
    let sexo = document.querySelector('radioSex');
    let telefono = document.querySelector('numberTel');
    let provinciaResidencia = document.querySelector('optProvincias');
    let domicilio = document.querySelector('txtAddress');

    formulario.addEventListener("submit", function(e){
        
        let errores = [];

        if(nombre.value = ""){
            errores.push("El campo de nombre tiene que estar completo")
        } else if(nombreUsuario < 2){
            errores.push("El campo de nombre tiene menos de 2 caracteres")
        }

        if(apellido.value = ""){
            errores.push("El campo de apellido tiene que estar completo")
        } else if(nombreUsuario < 2){
            errores.push("El campo de apellido tiene menos de 6 caracteres")
        }

        if(email.value = ""){
            errores.push("El campo de email tiene que estar completo")
        }

        if(nombreUsuario.value = ""){
            errores.push("El campo de nombre de usuario tiene que estar completo")
        } else if (nombreUsuario.value > 30 ){
            errores.push("El campo de nombre de usuario tiene mas de 30 caracteres")
        } else if(nombreUsuario < 6){
            errores.push("El campo de nombre de usuario tiene menos de 6 caracteres")
        }

        if(contraseña.value = ""){
            errores.push("El campo de contraseña tiene que estar completo")
        } else if (contraseña.value > 24 ){
            errores.push("El campo de contraseña tiene mas de 24 caracteres")
        } else if(contraseña < 6){
            errores.push("El campo de contraseña tiene menos de 6 caracteres")
        }

        if(fechaNacimiento.value = ""){
            errores.push("El campo de fecha de nacimiento tiene que estar completo")
        }

        if(sexo.value = ""){
            errores.push("El campo de sexo tiene que estar completo")
        }

        if(telefono.value = ""){
            errores.push("El campo de telefono tiene que estar completo")
        } else if (telefono.value > 14 ){
            errores.push("El campo de nombre de usuario tiene mas de 14 caracteres")
        } else if(telefono < 8){
            errores.push("El campo de telefono tiene menos de 8 caracteres")
        } else if (isNaN(telefono.value)){
            errores.push("Inserte un numero telefonico")
        }


        if(provinciaResidencia.value = ""){
            errores.push("El campo de provincia de residencia tiene que estar completo")
        }

        if(domicilio.value = ""){
            errores.push("El campo de domicilio tiene que estar completo")
        }

        if(errores.length > 0){
            e.preventDefault();

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML +- "<li>" + errores[i] + "<li>"
            }
        }

        
        
    })
}