const d = document;

export default function searchFilters(input, selector){
    d.addEventListener("keyup",function(e){
        if(e.target.matches(input)){
            //console.log(e.key);
            console.log(e.target.value);

            if(e.key==="Escape"){
                e.target.value="";
            }

            d.querySelectorAll(selector).forEach(el =>{
                //evalua si existe el valor del input en las atrjetas
                el.textContent.toLowerCase().includes(e.target.value)?
                el.classList.remove("filter"):
                el.classList.add("filter")
            
                
                
            });
        }
    });
};