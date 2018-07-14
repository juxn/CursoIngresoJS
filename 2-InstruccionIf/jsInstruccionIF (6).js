function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);


    if (edad < 13) 
    {
        alert ("es un niño");
    }  
    else 
    {   
        if ( (edad >= 13) && (edad <= 17) ) 
        {
        alert ("es adolescente"); 
        } 
        else 
        { 
        alert ("es mayor"); // aqui habia error,no hacia falta aclarar que era mas de 17, solo else porque es lo que queda y ya //
        }
    }


}
//FIN DE LA FUNCIÓN//