function isValidCard(cardNumber){
var arrayCard = [];
var arrayPar= [];
var resultado = 0;
var arrayImpar= [];
var sumaImpar = 0;
var sumaPar = 0;

	for(i=0; i<cardNumber.length; i++){
		arrayCard.push(cardNumber[i]);
	}

	arrayCard = arrayCard.reverse();
	console.log("arrayCard" + arrayCard);

	for (var i = 1; i < arrayCard.length; i += 2) {
		if(arrayCard[i] * 2 >= 10 ){
			resultado = arrayCard[i] * 2;
			var array = [];
			while (resultado > 0) {
			    array[array.length] = resultado % 10;
			    resultado = parseInt(resultado / 10);
			}
			numeroPar= array[0] + array[1];
		}else{
			numeroPar = arrayCard[i] * 2;
		}
		arrayPar.push(numeroPar);
	}

	console.log("arrayPar" + arrayPar);
	for(i=0; i<arrayCard.length; i+=2){
	 arrayImpar.push(arrayCard[i]);		
	 sumaImpar += parseInt(arrayCard[i]);

	}

	for(i=0; i<arrayPar.length; i++){
		sumaPar += arrayPar[i];
	}
		
	console.log("arrayImpar" + arrayImpar);	
	console.log("Suma Pares "+ " "+sumaPar);
	console.log("Suma Impares "+ " "+ sumaImpar);

	if( (sumaImpar + sumaPar) % 10 == 0){
		alert("Su tarjeta es Valida");
		return true;
	} else {
		alert("Su tarjeta no es Valida");
		return false;
	}
}

//4083952015263
