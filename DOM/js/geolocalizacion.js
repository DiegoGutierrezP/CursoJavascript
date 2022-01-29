
const d = document,
n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy : true,//al darle true le decimos que trate de hacer la mejor lectura posible
        timeout: 5000,
        maximumAge:0//par que no se guarde en cache las lecturas
    };

    //funcion en caso de exito
    const success = (position) => {
        let coords = position.coords;
        console.log(position);

        $id.innerHTML= `<p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${coords.accuracy} metros</b></li>
        </ul>
        </p>
        <a href='https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z' target='_blank' rel='noopener'>Ver en google maps</a>`;
    }
    //funcion en caso deerror
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success, error,options);
   // watch position nos permite saber el cambio de posicion
}