//clase 89 90
const d = document;
const ls = localStorage;

export default  function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
     $selectors = d.querySelectorAll("[data-dark]");
     //console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    function lightMode() {
        $selectors.forEach(el => {
            el.classList.remove(classDark);
        })
        $themeBtn.textContent = moon;
        ls.setItem("theme","light")
    };
    function darkMode() {
        $selectors.forEach(el => {
            el.classList.add(classDark);
        })
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark")
    };

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            //console.log($themeBtn.textContent)
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
               lightMode();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e) =>{
        //api localstorage : me permite almacenar valores en los navegadores
        //console.log(ls.getItem("theme"))
        if(ls.getItem("theme") === null){
            ls.setItem("theme","light");
        }
        if(ls.getItem("theme") === "light"){
            lightMode();
        }
        if(ls.getItem("theme") === "dark"){
            darkMode();
        }
    })
}