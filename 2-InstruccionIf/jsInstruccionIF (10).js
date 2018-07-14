function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota = Math.floor((Math.random() * 10) + 1);
	alert(nota);



	if (nota >= 9)
	{
	alert("EXCELENTE");
	}
	else
	{
		if (nota > 4)
		{
			alert("aprobo");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}


	/*
	var random = parseInt (Math.random () * (10 + 1));
	if ( random = 9 && 10);
	msg (EXCELENTE);
	
	alert (random); */
	

}//FIN DE LA FUNCIÓN