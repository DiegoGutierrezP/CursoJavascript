import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { shortcuts,moveBall }from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{//representa la carga del documento
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("../assets/alarma-guerra.mp3","#activar-alarma","#desactivar-alarma");
    countDown("countdown","Jan 26, 2022 13:18:19","Feliz CUmpleaños amigo");
    scrollTopButton(".scroll-top-btn");
    
})

d.addEventListener("keydown", e=>{
    //shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode");

