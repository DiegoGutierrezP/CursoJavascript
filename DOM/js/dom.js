//console.log("*******************Elemntos del DOM**************************")

/* console.log(window.document)
console.log(document)
console.log(document.head);
console.log(document.body)
console.log(document.documentElement);
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.image);
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)

setTimeout(()=>{
    console.log(document.getSelection().toString())
},3000) */

/* **************************************************************************** */

/* console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));//solo trae el primero

console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach(el => console.log(el))

console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */

/* Atributos y Data-Attributes ***************************************************************** */

/* console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute('target','_blank');
$linkDOM.setAttribute('rel','noopener');

console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel");

//Data - Attributes
console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description)
console.log($linkDOM.dataset.id)
$linkDOM.setAttribute("data-description","Modelo de obeto del documento")
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description = "suscribete a mi canal"
console.log($linkDOM.dataset.description) */

/* Estilos y Variables CSS ***************************************************************** */

// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log(window.getComputedStyle($linkDOM));
// console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.padding = "5px";
// $linkDOM.style.margin = "auto";
// $linkDOM.style.textAlign = "center";

// //variables CSS y Custom Properties CSS

// const $html = document.documentElement,
// $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
// varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor,varYellowColor);

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color","pink");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color",varDarkColor)

/* DOM: Clases CSS ***************************************************************** */

// const $card = document.querySelector(".card")
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);

// $card.classList.remove("rotate-45");
// console.log($card.className);
// console.log($card.classList);

// $card.classList.toggle("rotate-45");//si tiene la clase lo saca , sino lo pone
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));

// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45","rotate-135");
// $card.classList.add("opacity-80","sepia")
// $card.classList.remove("opacity-80","sepia")
// $card.classList.toggle("opacity-80","sepia")

/* DOM: Texto y HTML ***************************************************************** */

/* const $whatIsDOM = document.getElementById("que-es")

let text = `<p>EL modelo de objetos del documento (<b><i>DOM-Document OBject MOdel</i></b>)
es una API para <documentos HTML y XML/p> 
<p>ESte provee una representacion estructural del documento 
permitiendo modifcar su contenido y presentacion visual mediante
codigo JS</p>`;

$whatIsDOM.innerText = text;//no reconoce etiquetas html
$whatIsDOM.textContent = text;//no reconoce
$whatIsDOM.innerHTML = text;//reconoce etiquetas html
$whatIsDOM.outerHTML = text;//reemplaza el div contenedor */

/* DOM Traversing: Recorriendo el DOM ***************************************************************** */

/* $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.
console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo
console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3 */

/* DOM: Creando Elementos y Fragmentos ***************************************************************** */

/* const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card")//agrega estilos

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>`;

$figure2.classList.add("card")
$cards.appendChild($figure2);

const estaciones =["Primavera","Verano","Otoño","Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {//por cada elemento
    //$ul.appendChild(`<li>${el}</li>`);
    const $li = document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li);
})

const continentes = ["africa","america","asia","oceania","europa"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";

continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

//Fragmentos
const meses = [
    "enero","febrero","marzo","abril","mayo","junio","julio","agosto"
],
$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

/* DOM: Templates HTML ***************************************************************** */
//las etiquetas template no se renderizan en el DOM, se utiliza para generar estructuras dinamicamente

/* const $cards = document.querySelector(".cards"),
$template = document.querySelector("#template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title:"Tecnologia",
        img:"https://placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img:"https://placeimg.com/200/200/animals",
    },
    {
        title:"Arquictectura",
        img:"https://placeimg.com/200/200/arch",
    },
    {
        title:"Gente",
        img:"https://placeimg.com/200/200/people",
    }
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);//clonamos el template, toda la estructura
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

/* DOM: Modificando Elementos (Old Style) ***************************************************************** */

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);//si quiero que clone todo su contenido es true

$newCard.innerHTML = `<img src="https://placeimg.com/200/200/any" alt="Any">
                        <figcaption>Any</figcaption>`;

$newCard.classList.add("card");
//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard,$cards.firstElementChild);
//$cards.removeChild($cards.lastElementChild);//eliminar
document.body.appendChild($cloneCards); */

/* DOM: Modificando Elementos (Cool Style) ***************************************************************** */

/* 
    .insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

    Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `<img src="https://placeimg.com/200/200/any" alt="Any">
                        <figcaption></figcaption>`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML('beforeend',$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");

//$cards.insertAdjacentElement("beforebegin",$newCard)
//$cards.insertAdjacentElement("afterbegin",$newCard)
//$cards.insertAdjacentElement("afterend",$newCard)

//$cards.prepend($newCard);//inserta como primer hijo
//$cards.before($newCard)//inserta antes
$cards.append($newCard) */

/* DOM: Manejadores de Eventos ***************************************************************** */
/* DOM: Eventos con Parámetros y Remover Eventos ***************************************************************** */

/* function holaMundo(){
    alert('hola mundo');
    console.log(event)
}

function saludar(nombre = "desconocido"){
    alert(`Hola ${nombre} - ${event}`);
}


const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;//cuando es un evento semantico se iguala al nombre de la funcion sin los parentesis
$eventoSemantico.onclick = (e) => {
    alert("hola mundo manejador de eventos semanticos");
    console.log(e);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert("manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
});

$eventoMultiple.addEventListener('click',() => {//si necesito pasar parametros, lo envuelvo en una arrow function
    saludar();
    saludar("diego");
});
//remover eventos
const removerDobleClick = (e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true;
}

const $eventoRemover = document.getElementById("evento-remover");

$eventoRemover.addEventListener('dblclick', removerDobleClick) */

/* DOM: Flujo de Eventos (Burbuja y Captura) ***************************************************************** */
/* DOM: stopPropagation & preventDefault ***************************************************************** */
/* DOM: Delegación de Eventos  ***************************************************************** */

/* const $divEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");


function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

    e.stopPropagation();//evita propagacion
}
//Delegacion de eventos
document.addEventListener("click",(e)=>{
    console.log("click en "+ e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
        alert(`hola soy tu amigo y docente`);
    }
}); */


/* $divEventos.forEach(div => {
    //fase de burbuja, el flujo se propaga del interno al externo
    div.addEventListener("click",flujoEventos);
    //fase de captura, el flujo se propaga del externo al interno
    //div.addEventListener("click",flujoEventos,true);
    //div.addEventListener("click",flujoEventos,{
     //   capture: false,
    //    once: true,//solo una vez se ejecuta
    //}) ;  
});

$linkEventos.addEventListener('click',(e)=>{
    alert(`hola soy tu amigo y docente`);
    e.preventDefault();
    e.stopPropagation();
}) */

/* BOM: Propiedades y Eventos  ***************************************************************** */
window.addEventListener("resize", e =>{
    console.clear();
    console.log('********Evento Resize*****************');
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    
})

window.addEventListener("scroll", e =>{
    console.clear();
    console.log('********Evento Scroll*****************');
    console.log(window.scrollX);
    console.log(window.scrollY);
})

window.addEventListener('load', e => {

    console.log('********Evento Load*****************');
    console.log(window.screenX);
    console.log(window.screenY);
})

//document.ready(function)
document.addEventListener("DOMContentLoaded", e => {

    console.log('********Evento DOMContentLoaded*****************');
    console.log(window.screenX);
    console.log(window.screenY);
})

/* BOM: Métodos  ***************************************************************** */

const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener('click',e => {
   ventana = window.open("https://jonmircha.com")
});
$btnCerrar.addEventListener('click',e => {
    ventana.close();
});
$btnImprimir.addEventListener('click',e => {
    window.print();//se manda imprimir
});