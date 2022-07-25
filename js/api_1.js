const API_URL = `https://jsonplaceholder.typicode.com`;

//#region Ejemplo 1
// const xhr = new XMLHttpRequest();

// function ManejadorRequest() {
//     // Codigos
//     // 0 = Set : noc a llamado al metodo open
//     // 1 = Opened : se ha llamado al metodo open
//     // 2 = Header_recived : se esta llamando al metodo send()
//     // 3 = Loading : esta recibiendo la respuesta
//     // 4 = DONE : se ha completado todo

//     if( this.readyState===4 && this.status === 200){
//         const datos = JSON.parse(this.response);
//         console.log(datos);

//         const contenido = document.querySelector("#respuesta");
//         const template = datos.map(user => `<li>${user.name}-${user.email}</li>`);
//         contenido.innerHTML = `<ul>${template}</ul>`;
//     }
// }


// xhr.addEventListener('load', ManejadorRequest);
// xhr.open('GET', `${API_URL}/users`);
// xhr.send();
//#endregion

//#region 
function exampleApi2(){
    const respuesta = document.querySelector("#respuesta");

    fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(users =>{
            const users_template = users.map(user => `<li>${user.name} | ${user.email}</li>`);
            respuesta.innerHTML = `<ul>${users_template}</ul>`;
        })

}
// exampleApi2();
//#endregion

//#region Ejemplo 3

function exampleApi3(){

    const HTMLresponse = document.querySelector("#respuesta");
    const ul = document.createElement('ul');
    
    fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            let element = document.createElement('li');
            element.appendChild(document.createTextNode(`${user.name} | ${user.email}`));
            ul.appendChild(element);


        });

        HTMLresponse.appendChild(ul);
        
    });

}

exampleApi3();

//#endregion