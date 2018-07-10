function mostrar()
{   var nombre;
    var localidad;
    var resultado;
    nombre = document.getElementById("elNombre").value; 
    localidad = document.getElementById("laLocalidad").value; 
    resultado = nombre + localidad;
    alert ("usted es" + " " + nombre + " " + "y vive en la localidad de" + " " + localidad); 
  
}
