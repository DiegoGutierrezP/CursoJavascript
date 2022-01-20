export const PI = Math.PI;

export let usuario = "Diego";

let password = "1234";
//export default password;//exportacion por defecto, solo puede haber un default por archivo

const hellow = () => {
    console.log("Hola");
}

export default function saludar(){
    console.log("Hola modulos +ES6")
}

export class Saludar{
    constructor(){
        console.log("Hola soy la clase saludar");
    }
}