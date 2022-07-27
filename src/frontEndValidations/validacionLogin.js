window.onload = function(){
    let formulario = document.querySelector('form.formulario-contenedor');
    let email = document.querySelector('emailUserEmail');
    let contraseña = document.querySelector('txtPassword');

    formulario.addEventListener("submit", function(e){
        
        let errores = [];

        if(email.value = ""){
            errores.push("El campo de email tiene que estar completo")
        } else if(contraseña < 6){
            errores.push("El campo de email tiene menos de 6 caracteres")
        }

        if(contraseña.value = ""){
            errores.push("El campo de contraseña tiene que estar completo")
        } else if(contraseña < 6){
            errores.push("El campo de contraseña tiene menos de 6 caracteres")
        }

        if(errores.length > 0){
            e.preventDefault();

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML +- "<li>" + errores[i] + "<li>"
            }
        }      
    })
}