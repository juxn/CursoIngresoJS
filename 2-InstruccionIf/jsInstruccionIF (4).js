function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    if (( edad >= 13) && (edad <= 17 )) //se ve que se ponen las edades separadas por parentesis//
    { 
        alert ("usted es adolescente");
    }
    else
    {
        alert ("usted NO es adolescente");
    }

}//FIN DE LA FUNCIÓN