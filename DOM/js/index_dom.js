import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { shortcuts,moveBall }from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{//representa la carga del documento
    hamburgerMenu(".panel-btn",".panel",".menu a")
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("../assets/alarma-guerra.mp3","#activar-alarma","#desactivar-alarma");
})

d.addEventListener("keydown", e=>{
    //shortcuts(e);
    moveBall(e,".ball",".stage");
})

