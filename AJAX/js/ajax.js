
//XMLHTTPRequest--------------------------------

(()=>{//funcion autoejecutable
    const xhr = new XMLHttpRequest(),//1.instanciar
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    //console.log(xhr);

    //2. asignar el evento
    xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState !== 4) return;//importante
        console.log(xhr);
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("Exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML=xhr.responseText
            let json = JSON.parse(xhr.responseText);
            console.log(json);

            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }else{
            console.log("Error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        console.log("Este mensaje cargara de cualquier forma");
        
    });

    //xhr.open("GET","https://jsonplaceholder.typicode.com/users");//3.abre la peticion
    xhr.open("GET","../assets/users.json");//3.abre la peticion
    xhr.send();//4.enviar la peticion/con o sin datos dependiendo de las necesidades
})()