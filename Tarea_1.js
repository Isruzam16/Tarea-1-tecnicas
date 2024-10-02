//Ejercicio_1
function SumaNumeros(n1, n2){
 return n1+n2;
}
console.log(SumaNumeros(16,12));
//Ejercicio_2
function RestaNumeros(n1, n2){
    return n1-n2;
}
console.log(RestaNumeros(16,12));
//Ejercicio_3
function MultiplicacionNumeros(n1, n2){
    return n1*n2;
}
console.log(MultiplicacionNumeros(16,12));
//Ejercicio_4
function DivisionNumeros(n1, n2){
    return n1/n2;
}
console.log(DivisionNumeros(16,12));
//Ejercicio_5
function CalculoModulo(n1, n2){
    return n1%n2;
}
console.log(CalculoModulo(10,20));
//Ejercicio_6
function Calculopotencia(n3){
    return n3**5;
}
console.log(Calculopotencia(3))     
//Ejercicio_7
function CelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  let celsius = 16;
  let fahrenheit = CelsiusAFahrenheit(celsius);
  console.log(`${celsius}°C es igual a ${fahrenheit}°F`);
//Ejercicio_8
function CalculoPerimetro(largo,ancho){
    
    return 2*(largo+ancho);
}
console.log(CalculoPerimetro(16,12))
//Ejercicio_9
function ParOImpar(num){
    return num % 2 === 0?"Par":"Impar";
}
console.log(ParOImpar(3))
//Ejercicio_10
const mayorDeDos = function(a,b){
    return a > b ? a : b;
}
const u = mayorDeDos (76,89)
console.log(u)
//Ejercicio_11
const areacirculo = (radio) => Math.PI * radio * radio;
const area = areacirculo(8)
console.log(area)
//Ejercicio_12
const kmMillas = (kilometros) => kilometros *0.621371;
const millas = kmMillas(5);
console.log(millas)

//Ejercicio_13
const nombreCompleto = (nombre,apellido) => `${nombre} ${apellido}`
const completo = nombreCompleto("Isaac","Zambrano")
console.log(completo);

//Ejercicio_14
const contieneLetraA = (texto) => texto.includes('a')
console.log(contieneLetraA('Hola'))

//Ejercicio_15
let n1 = (arreglo) => {
    let c = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(isNaN(arreglo[i])){
            console.log('No hay Numeros')
        } else{
            c += 1
        }
    }
    return c;
}
console.log(n1(['a', 5, 8, 't', 7, 'a']))

//Ejercicio_16
let arre3 = [1,2,3,4,5]
function mult(arre3){
    let arr2 = []
    let multi
    for (i=0; i < arre3.length; i++){
        multi = arre3[i] * 2
        arr2.push(multi)
    }
    return arr2
}
console.log(mult(arre3))

//Ejercicio_17
let arre2 = [1,2,3,4,5,6,7,8,9,10]
function filtrado(lista, callback){
    let nlista = []
    for (i = 0; i < arre2.length; i++){
        if(callback(lista[i])){
            nlista.push(lista[i])
        }
    }
    return nlista
}
let al_cubo = (num) => num % 5 == 0
console.log(filtrado(arre2, al_cubo))

//Ejercicio_18
function incrementadora(callback) {
    return function (n1){
        return callback (n1)
    }
}
function incremento(n) {
    return n + 1
}
let incrementar = incrementadora(incremento)
console.log(incrementar(5))

//Ejercicio_19
let celular = {
    gama: "baja",
    color: "rojo",
    procesador: "exynos",
    marca: "Xiomi"
}
function modificar(change){
    change.gama = "alta"
    change.color = "azul"
    change.procesador = "Snapdragon"
    change.marca = "Samsung"
    return change 
}
console.log(modificar(celular))

//Ejercicio_20
let coche =  {
    marca: "Chevroleth",
    modelo: "Aveo Family",
    año: "2018"
}
console.log(coche.marca)

//Ejercicio_21
let libro = {
    autor: "Isaac Zambrano",
    titulo: "programamcion avanzada",
    año_de_publicacion: "2024",
}
console.log(libro.año_de_publicacion)

////Ejercicio_22
let usuario = {
    nombre: "JIsaac Zambrano",
    correo: "izrumbea24@unemi.edu.ec",
    contraseña: "202412"
}
console.log(usuario.correo)
//Ejercicio_23
let producto = {
    nombre: "Rufles",
    precio: "0.40",
    cantidad: "12"
}
console.log(producto.precio)

//Ejercicio_24
let estudiantes ={
    nombre: "Isaac Zambrano",
    matricula: "Segunda",
    carreras: "Software"
}
console.log(estudiantes.matricula)
//Ejercicio_25
function recursiva (num1){
if (num1 == 1){
    return 1;
} else{
    return num1 * 12 + recursiva (num1 - 1)
  }
}
console.log(recursiva(9))
//Ejercicio_26
function recursiva2 (n){
    if (n == 1){
        return 1
    } else{
        return n + recursiva (n - 1)
    }
} 
console.log(recursiva2(2))

//Ejercicio_27
function recursiva3(a,b){
if(b == 0){
    return a
} else {
    return recursiva3(b,a % b)
}
}
console.log(recursiva3(12,21))
//Ejercicio_28
function recursiva4 (n){
    if(n<=1){
        return 1
    } else{
        return recursiva4(n - 1) + recursiva4(n - 3)
    }
    
    }
    for(i = 1; i <= 10; i++){
        console.log(recursiva4(i))
}
//Ejercicio_29
function recursiva5(texto, i = null){
    if (i === null){
        i = texto.length - 1
    }
    if (i < 0 ){
        return ''
    }
    return texto[i] + recursiva5(texto, i - 1)
}
console.log(recursiva5("Hola"))

//Ejercicio_30
let x = 10
function a (){
    x = x + 5
}
console.log(x)
a()
console.log(x)
//Ejercicio_31
let c = 5
function b() {
    let c = 10
}
console.log(c)
b()
console.log(x)

//Ejercicio_32
function suma () {
    let resultado
    return resultado = 5 + 2
}
console.log(suma())
function rest(){
    let resultado
    return resultado = 5 - 3
}
console.log(rest())

//Ejercicio_33
let contador = 0;
function incrementarContador() {
    contador++;
    console.log("Contador: " + contador);
}

function decrementarContador() {
    contador--;
    console.log("Contador: " + contador);
}

function reiniciarContador() {
    contador = 0;
    console.log("Contador reiniciado a: " + contador);
}

incrementarContador();
incrementarContador(); 
decrementarContador(); 
reiniciarContador();   
//Ejercicio_34
function funcionExterna() {
    let variableLocal = 10; 

    function funcionInterna() {

        variableLocal += 5; 
        console.log("Desde funcionInterna: " + variableLocal); 
    }

    funcionInterna();
    console.log("Desde funcionExterna: " + variableLocal);
}

funcionExterna();

//Ejercicio_35
function bisiesto (año){
    return año % 400 == 0 ? `es un año bisiesto` : año %  100 == 0 ? `no es un año bisiesto` : año % 4 == 0 ? `es año bisiesto` : `no es un año bisiesto`
}
console.log(bisiesto(2020))

//Ejercicio_36
function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(mayorDeTres(10, 20, 5)); 
console.log(mayorDeTres(-1, -5, -3)); 
console.log(mayorDeTres(7, 7, 7)); 

//Ejercicio_37
function evaluarEstudiante(nota) {
    if (nota >= 6) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
console.log(evaluarEstudiante(7)); 
console.log(evaluarEstudiante(5)); 
console.log(evaluarEstudiante(6)); 
//Ejercicio_38
function clasificarEdad(edad) {
    if (edad < 0) {
        return "Edad no válida";
    } else if (edad <= 12) {
        return "Niño";
    } else if (edad <= 17) {
        return "Adolescente";
    } else if (edad <= 64) {
        return "Adulto";
    } else {
        return "Anciano";
    }
}
console.log(clasificarEdad(10)); 
console.log(clasificarEdad(15)); 
console.log(clasificarEdad(30)); 
console.log(clasificarEdad(70)); 

///Ejercicio_39
function verificarAcceso(edad) {
    const edadMinima = 18; 

    if (edad >= edadMinima) {
        return "Acceso permitido";
    } else {
        return "Acceso denegado";
    }
}

console.log(verificarAcceso(20)); 
console.log(verificarAcceso(16)); 
console.log(verificarAcceso(18)); 

//Ejercicio_40
let conta = 1;

while (conta <= 100) {
    console.log(conta);
    conta++;
}

//.//Ejercicio_41
let cont = 1;
let sum = 0;

while (cont <= 50) {
    sum += cont;
    cont++;     
}

console.log("La suma de los primeros 50 números naturales es: " + sum);

//Ejercicio_41

let usuar = "Juan"
let rep = 4
while(rep > 0){
    console.log("Hola"+ usuar)
    rep --
}

//Ejercicio_42
let inicio = 1; 
let fin = 100;  

let numero = inicio;

while (numero <= fin) {
    if (numero % 7 === 0) {
        console.log(`El primer número divisible por 7 es: ${numero}`);
        break;
    }
    numero++;
}

//Ejercicio_43
function validar_entrada(entrada){
    while(entrada!= "Hola"){
        return "Ingrese la palabra hola"
    }
    return "Hola"
}

//Ejercicio_44
function asignarCalificacion(puntos) {
    let calificacion;

    switch (true) {
        case (puntos >= 90):
            calificacion = 'A';
            break;
        case (puntos >= 80):
            calificacion = 'B';
            break;
        case (puntos >= 70):
            calificacion = 'C';
            break;
        case (puntos >= 60):
            calificacion = 'D';
            break;
        default:
            calificacion = 'F';
    }

    return calificacion;
}

console.log(asignarCalificacion(85));

//Ejercicio_45
function responderComando(comando) {
    let respuesta;

    switch (comando.toLowerCase()) {
        case 'hola':
            respuesta = '¡Hola! ¿Cómo puedo ayudarte hoy?';
            break;
        case 'ayuda':
            respuesta = 'Claro, ¿en qué necesitas ayuda?';
            break;
        case 'adiós':
            respuesta = '¡Hasta luego! Que tengas un buen día.';
            break;
        case 'información':
            respuesta = 'Aquí tienes información sobre nuestros servicios.';
            break;
        default:
            respuesta = 'Lo siento, no entiendo ese comando.';
    }

    return respuesta;
}

console.log(responderComando('Hola'));

//Ejercicio_46
function procesarPago(metodo) {
    let mensaje;

    switch (metodo.toLowerCase()) {
        case 'efectivo':
            mensaje = 'Has elegido pagar en efectivo. Por favor, entrega el monto al cajero.';
            break;
        case 'tarjeta':
            mensaje = 'Has elegido pagar con tarjeta. Por favor, inserta tu tarjeta en la terminal.';
            break;
        case 'cheque':
            mensaje = 'Has elegido pagar con cheque. Asegúrate de que esté firmado.';
            break;
        default:
            mensaje = 'Método de pago no reconocido. Por favor, elige efectivo, tarjeta o cheque.';
    }

    return mensaje;
}

console.log(procesarPago('tarjeta')); 

//Ejercicio_47
function calcular(num1, num2, operacion) {
    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return 'Error: No se puede dividir entre cero.';
            }
            break;
        default:
            return 'Error: Operación no válida. Usa +, -, * o /.';
    }

    return resultado;
}

console.log(calcular(10, 5, '+'));  
console.log(calcular(10, 5, '-'));  
console.log(calcular(10, 5, '*'));  
console.log(calcular(10, 5, '/'));  
console.log(calcular(10, 0, '/')); 

//Ejercicio_48
function cambiarIdioma(idioma) {
    let saludo;

    switch (idioma.toLowerCase()) {
        case 'es':
            saludo = '¡Hola! Bienvenido a nuestro sitio web.';
            break;
        case 'en':
            saludo = 'Hello! Welcome to our website.';
            break;
        case 'fr':
            saludo = 'Bonjour! Bienvenue sur notre site web.';
            break;
        case 'de':
            saludo = 'Hallo! Willkommen auf unserer Webseite.';
            break;
        case 'it':
            saludo = 'Ciao! Benvenuto nel nostro sito web.';
            break;
        default:
            saludo = 'Idioma no reconocido. Por favor, selecciona un idioma válido.';
    }

    return saludo;
}

console.log(cambiarIdioma('es')); 
console.log(cambiarIdioma('en')); 
console.log(cambiarIdioma('fr'));
//Ejercicio_49
const elementos = ['manzana', 'banana', 'cereza', 'dátil', 'higo'];

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}

//Ejercicio_50
const numeros = [2, 3, 4, 5];
let pro = 1

for (let i = 0; i < numeros.length; i++) {
    pro *= numeros[i];
}

console.log(`El producto de los elementos es: ${pro}`);

//Ejercicio_51
const numer= [34, 15, 88, 2, 19];
let menor = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(`El menor número en el array es: ${menor}`);

//Ejercicio_52
const element = ['manzana', 'banana', 'cereza', 'dátil'];
const buscar = 'cereza'; 
let encontrado = false; 

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === buscar) {
        encontrado = true; 
        break;
    }
}

if (encontrado) {
    console.log(`${buscar} se encuentra en el array.`);
} else {
    console.log(`${buscar} no se encuentra en el array.`);
}

//Ejercicio_53
const original = ['manzana', 'banana', 'cereza', 'dátil'];
const copia = []; 

for (let i = 0; i < original.length; i++) {
    copia[i] = original[i]; 
}

console.log('Array original:', original);
console.log('Array copia:', copia);

//Ejercicio_54
function user_m (numero) {
    let numer = []
    do{
        console.log("Ingrese numero")
        numer.push(numero)
    } while (numero < 10)
        return numer
}

//Ejercicio_55
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    ocupacion: 'Desarrollador'
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//Ejercicio_56
const nombres = ['Ana', 'Luis', 'Pedro', 'María'];

for (const nombre of nombres) {
    console.log(`¡Hola, ${nombre}!`);
}
//Ejercicio_57
const precios = [100, 200, 300, 400];
const descuento = 0.10; 

const preciosConDescuento = [];

precios.forEach(precio => {
    const nuevoPrecio = precio - (precio * descuento); 
    preciosConDescuento.push(nuevoPrecio); 
});

console.log('Precios originales:', precios);
console.log('Precios con descuento:', preciosConDescuento);

//Ejercicio_60
const temperaturasCelsius = [0, 20, 30, 100];

const temperaturasFahrenheit = temperaturasCelsius.map(celsius => {
    return (celsius * 9/5) + 32; 
});

console.log('Temperaturas en Celsius:', temperaturasCelsius);
console.log('Temperaturas en Fahrenheit:', temperaturasFahrenheit);
