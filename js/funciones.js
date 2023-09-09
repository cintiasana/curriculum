// ingresar nombre de usuario
document.getElementById('ingresarNombre').addEventListener('click', function(){

    let nomUsuario = document.getElementById('nombreUsuario').value;
    const nom_inv="invitad@"
    if (nomUsuario == ""){
        nombreUsuario = nom_inv
    }else{
        document.getElementById('nom_inv').innerHTML= nomUsuario;
    }

    function nombreUsuario(nomUsuario){
        return nomUsuario;
    }

});


// evento para ocultar elementoscon css

document.getElementById('ingresarNombre').onclick = function(){
    console.log("ocultar el texto")
    
    document.getElementById('seccionMensaje').style.display='block';

    document.getElementById('seccionPortada').style.display='none';
}

