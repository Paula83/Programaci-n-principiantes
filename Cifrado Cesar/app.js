 var respuesta = prompt("Ingrese por favor una frase para cifrar:");
 cipher(respuesta);


function cipher(palabra){

	//la idea del string vacio es juntar las letras cada vez que recorre 
	//y retornarlo al final
	var palabraCifrada = "";

	//Se recorren todas las posiciones de la palabra ingresada aplicandole el cifrado cesar
	//letra por letra
	for( var i = 0; i < palabra.length; i++){

		//Letra en cada posición de la palabra
		var letra = palabra[i];

		//Codigo ASCII de cada letra
		var codeAscii = palabra.charCodeAt(i);

		//Letra cifrada
		letra = String.fromCharCode((codeAscii - 65 + 33) % 26 + 65);

		palabraCifrada = palabraCifrada+letra; 
	}
	alert("Su palabra cifrada es:" + " " + palabraCifrada);
	return palabraCifrada;
}


function decipher(palabra){
	//la idea del string vacio es juntar las letras cada vez que recorre 
	//y retornarlo al final
	var palabraCifrada = "";

	//Se recorren todas las posiciones de la palabra ingresada aplicandole el cifrado cesar
	//letra por letra
	for( var i = 0; i < palabra.length; i++){

		//Letra en cada posición de la palabra
		var letra = palabra[i];

		//Codigo ASCII de cada letra
		var codeAscii = palabra.charCodeAt(i);

		//Letra descifrada
		letra = String.fromCharCode((codeAscii - 65 +19) % 26 + 65);

		palabraCifrada = palabraCifrada+letra; 
	}
	alert("Su palabra descifrada es:" + " " + palabraCifrada);
	return palabraCifrada;
}