const d=document,
n =navigator;
export default function webCam(id){
    const $video = d.getElementById(id);
    //console.log(n.mediaDevices);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true,audio:false})
        .then(stream =>{//recibimos la visualizacion de webcam
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err => {
            $video.insertAdjacentHTML("beforebegin",`Sucedio el siguiente error<p><mark>${err}</mark></p>`);
            console.log(`Sucedio el siguiente error ${err}`)
        })//es una promesa
    }
}