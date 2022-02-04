
//XMLHTTPRequest--------------------------------

(()=>{//funcion autoejecutable
    const xhr = new XMLHttpRequest(),//1.instanciar
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    //console.log(xhr);

    //2. asignar el evento
    xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState !== 4) return;//importante
        //console.log(xhr);
        if(xhr.status >= 200 && xhr.status < 300){
            //console.log("Exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML=xhr.responseText
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

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

        //console.log("Este mensaje cargara de cualquier forma");
        
    });

    //xhr.open("GET","https://jsonplaceholder.typicode.com/users");//3.abre la peticion
    xhr.open("GET","../assets/users.json");//3.abre la peticion
    xhr.send();//4.enviar la peticion/con o sin datos dependiendo de las necesidades
})();

//FETCH------------------------------------------------------------

( () => {
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    //el metodo por defecto de fetch es get
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        console.log(res);
        //return res.text();
        //return res.json();//la devolvemos al sgte then en formato json
        return res.ok ? res.json() : Promise.reject(res);// si hay error rechazamos la promesa
    }).then(json =>{
        console.log(json);
        //$fetch.innerHTML = json;
        json.forEach(el =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err=>{
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    }).finally(()=>{
        console.log("Esto se ejecutara independiente del resultado de la promesa fetch");
    })

})();

//FETCH + Asyn-Await------------------------------------------------------------

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){

        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await res.json();

            console.log(res,json);

            //if(!res.ok) throw new Error("Ocurrio un error al solicitar datos");
            if(!res.ok) throw {status: res.status , statusText: res.statusText};

            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);

        }catch(err){
            console.log("Estoy en el catch fetch-async" , err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }finally{
            console.log("Esto se ejecutara independiente del resultado del fetch-async");
        }
    }

    getData();

})();

//AXIOS(linkeamos libreria cdn)------------------------------------------------------------

(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/user")
    .then(res => {
        console.log(res);//objeto diferente a los demas
        let json = res.data;
        json.forEach(el =>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(err =>{
        //console.log("Estamos en el catch axios",err.response);
        let message = err.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(()=>{
        console.log("Esto se ejecutara independiente del resultado del axios");
    });

})();

//AXIOS + Async Await------------------------------------------------------------
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
            json = await res.data;

            json.forEach(el =>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);

            //console.log(json);
        }catch(err){
            console.log("Estamos en el catch axiosAsync",err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        }finally{

        }
    }

    getData();
})();

