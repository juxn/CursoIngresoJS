function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    if ( edad >= 13 && <= 17 ) {
        alert ("usted es adolescente");
    }

}//FIN DE LA FUNCIÓN