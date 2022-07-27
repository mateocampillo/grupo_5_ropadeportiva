window.onload = function(){
    let formulario = document.querySelector('div.container-prod-nuevo');
    let nombreProducto = document.querySelector('txtAddName');
    let descripcion = document.querySelector('txtAddDesc');
    let categoria = document.querySelector('radioAddCat');
    let precio = document.querySelector('numAddPrice');
    let tipo = document.querySelector('radioAddType');
    let talle = document.querySelector('radioAddSize');
    let cintura = document.querySelector('txtAddWaist');
    let pecho = document.querySelector('txtAddChest');
    let espalda = document.querySelector('txtAddBack');
    let altura = document.querySelector('txtAddHeight');
    let tela = document.querySelector('radioAddCloth');
    let color = document.querySelector('radioAddColor');
    let codigo = document.querySelector('txtAddCode');
    let fotos = document.querySelector('imgAddimage');


    formulario.addEventListener("submit", function(e){
        
        let errores = [];

        if(nombreProducto.value = ""){
            errores.push("El campo de nombre de producto tiene que estar completo")
        } else if(contraseña < 5){
            errores.push("El campo de nombre de producto tiene menos de 5 caracteres")
        }

        if(descripcion.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        } else if(contraseña < 20){
            errores.push("El campo de descripcion tiene menos de 20 caracteres")
        }

        if(categoria.value = ""){
            errores.push("El campo de categoria tiene que estar completo")
        }

        if(precio.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(tipo.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }
        
        if(talle.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(cintura.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(pecho.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(espalda.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(altura.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(tela.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(color.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(codigo.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }

        if(fotos.value = ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }
        

        if(errores.length > 0){
            e.preventDefault();

            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML +- "<li>" + errores[i] + "<li>"
            }
        }      
    })
}