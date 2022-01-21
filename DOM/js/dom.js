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

const $whatIsDOM = document.getElementById("que-es")

let text = `<p>EL modelo de objetos del documento (<b><i>DOM-Document OBject MOdel</i></b>)
es una API para <documentos HTML y XML/p> 
<p>ESte provee una representacion estructural del documento 
permitiendo modifcar su contenido y presentacion visual mediante
codigo JS</p>`;

$whatIsDOM.innerText = text;//no reconoce etiquetas html
$whatIsDOM.textContent = text;//no reconoce
$whatIsDOM.innerHTML = text;//reconoce etiquetas html
$whatIsDOM.outerHTML = text;//reemplaza el div contenedor
