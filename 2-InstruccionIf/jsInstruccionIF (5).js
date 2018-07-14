function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt (edad);
    if (! ( ( edad >= 13) && ( edad <= 17) ) ) 
    {
        alert ("NO es adolescente");
    }
}   // ojo que este no estaba funcionando y era solo porque faltraba la llave de cierre //
//FIN DE LA FUNCION