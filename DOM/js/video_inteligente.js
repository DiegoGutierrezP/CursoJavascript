
const d = document,
w = window;
export default function smartVideo(){
 const $videos = d.querySelectorAll("video[data-smart-video]");

const cb = (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.play();//lo reproducimos
        }else{
            entry.target.pause();//pausamos
        }
        
        w.addEventListener("visibilityChange",(e) =>{//cuando es visible o cambiamos de pestaña
            d.visibilityState === "visible"
            ?entry.target.play()
            :entry.taget.pause()
        });
    });
}

 const observer = new IntersectionObserver(cb,{
     threshold:0.5//cuando se vean a un 50% lo reproduscan
    });//recibe callback

$videos.forEach(el => observer.observe(el));


}