// ingresar nombre de usuario
document.getElementById('ingresarNombre').addEventListener('click', function(){

    let nomUsuario = document.getElementById('nombreUsuario').value;

    document.getElementById('nom_inv').innerHTML= nomUsuario;

   // function nombreUsuario(nomUsuario){
   //     return nomUsuario;
   // }

});


// evento para ocultar elementoscon css

document.getElementById('ingresarNombre').onclick=function(){
    console.log("ocultar el texto")
    
    document.getElementById('mensaje').style.display='block';
    document.getElementById('seccionPortada').style.display='none';
}

