import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { shortcuts,moveBall }from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{//representa la carga del documento
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("../assets/alarma-guerra.mp3","#activar-alarma","#desactivar-alarma");
    countDown("countdown","Jan 26, 2022 13:18:19","Feliz CUmpleaños amigo");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width:1024px)",
        "<a href='https://www.youtube.com/watch?v=UKunvvN2iCk&list=RDUKunvvN2iCk&start_radio=1' target='_blank'>Ver video</a>",
        `<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/6IwUl-4pAzc" 
        title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>`);
    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        "<a href='https://goo.gl/maps/6qMshuZdVJYAmFWMA' target='_blank'>Ver mapa</a>",
        `<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.556534528692!2d-77.04896211694664!3d-12.068331725365333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e921adc161%3A0x91a518942d5e9270!2sEl%20Campo%20de%20Marte!5e0!3m2!1ses!2spe!4v1643329470695!5m2!1ses!2spe" 
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

    responsiveTester("responsive-tester");

    userDeviceInfo("user-device");
})

d.addEventListener("keydown", e=>{
    //shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode");

