window.onload = function(){
    let formulario = document.querySelector('form');
    let email = document.querySelector('txtRecEmail');
    let telefono = document.querySelector('txtRecTel');
    let contraseña = document.querySelector('txtRecPass');
    let recContraseña = document.querySelector('txtRecPassConfirm'); 

    formulario.addEventListener("submit", function(e){
        
        let errores = [];

        if(email.value = ""){
            errores.push("El campo de email tiene que estar completo")
        } else if(contraseña < 6){
            errores.push("El campo de email tiene menos de 6 caracteres")
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

        if(contraseña.value = ""){
            errores.push("El campo de contraseña tiene que estar completo")
        } else if(contraseña < 6){
            errores.push("El campo de contraseña tiene menos de 6 caracteres")
        }

        if(recContraseña.value != contraseña.value){
            errores.push("Las contraseñas no coinciden")
        }

        if(errores.length > 0){
            e.preventDefault();

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML +- "<li>" + errores[i] + "<li>"
            }
        }      
    })
}