Pseudocodigo:Algoritmo Cifrado César (sustitución)

Ejecicio: 
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Consideraciones Específicas:

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números

Solución:
Se crea y guarda en una carpeta, dos archivos:
index.html
app.js

se solicita al usuario que ingrese 
una frase  por medio de un prompt.

Se declara una función llamada cipher, una vez declarada la función, se invoca una variable y se le asigna un nombre con un string vacio ""; dado que el string vacio nos permitirá juntar las palabras para retornarlas al final .

se difine la estructura aplicar, que en este caso se aplicará la estrctura for. La estructura for nos permite recorrer el valor ingresado por el usuario "letra por letra", a la cual se le incorpora la condición el cifrado césar a través de la formula (x+n)%26.

luego declaramos una variable que contenga el parámentro incluido en la función, el cuál me permitirá mirar la posición de cada letra.

Declaro una variable que contenga el código ASCII. (var codeAscii)
igual al parámetro y nombre del método charCodeAt(i) - la "i" vine siendo la zona de condición.


Nota:
código ASCII: 
* charCodeAt: este método permite convertir una letra en número.

* fromCharCode: este método convierte número en letra 

como podemos aplicar el método charCodeAt():
se invoca a través de una variable tipo string, la cual va ser igual "elemento".
luego llamamos el estring.charCodeAt(0). 

Eemplo: 
"A".charCodeAt(0) ---> debe de dar 65*

una vez aplicada y almacenada el código ASCII y el cifrado césar,se declara una variable. 
En la de declaración de la variable de tipo string agrego el método fromCharCode. la idea es agrupar ambos códigos es que cifre letra por letra. 
 


 Para decipher:

 para decifrar se hace exactamente lo mismo, lo que cambia es el cibrado cesar en vez de sumar 33, resta 33 

Nota: El usuario debe ingresar solo letras en mayúsculas para que el programa lo reconozca.   











