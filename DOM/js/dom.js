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

const $cards = document.querySelector(".cards"),
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

$cards.appendChild($fragment);