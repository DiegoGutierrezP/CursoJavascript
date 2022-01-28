const d = document;
const w= window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);//min-widht:1024px

    const responsive = (e)=>{
        if(e.matches){//cunado la mq se cumpla = true
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }

        //console.log("MQ",breakpoint,e.matches)
    }

    //breakpoint.addListener(responsive);
    breakpoint.addEventListener("change",responsive);

    responsive(breakpoint);
}