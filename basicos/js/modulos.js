
import saludar, {Saludar, PI, usuario } from "./constantes.js"
import {aritmetica as calculos} from "./aritmetica.js"

console.log("archivos modulos.js");

console.log(PI,usuario);

console.log(calculos.sumar(5,6));
console.log(calculos.restar(5,6));

saludar();

let saludo = new Saludar();
saludo;