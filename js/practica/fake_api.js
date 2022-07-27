const getAllUsers = async() =>{
    let respuesta = "";
    var nmr_errors = 0;
    try{
        const URL = "https://appgizlorecords.herokuapp.com/api/es/usuario/empresa/v1/1";
        const response = await fetch(URL);
        console.log(response);

        if(response.status === 200){
            const datos = await response.json();

            datos.forEach(item => {
                respuesta += `<li>${item.id} ${item.nombreCompleto}</li>`;
            });

            document.getElementById("respuesta").innerHTML = `<ul>${respuesta}</ul>`;

        }

    }catch(error){
        nmr_errors +=1;
        console.log(`Error: ${error}`);
    }finally{
        console.log(`[${nmr_errors}] Proceso finalizado`)
    }
};

getAllUsers();
// setTimeout(getAllUsers, 1500)



const createUser = async() =>{
    let nmr_errors = 0;

    const URL = "https://appgizlorecords.herokuapp.com/api/es/usuario/v1";
    const user = JSON.stringify({
        "nombreCompleto": "Usuario_5",
        "email": "usuario_5@gmail.com",
        "contrasenia": "root",
        "estado": "ACTIVO"
    });

    const options = {
        method: 'POST',
        body: user,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    try{
        const response = await fetch(URL, options);
        console.log(response);
        
        if(response.status === 200){
            const datos = await response.json();
            console.log(datos);
        }

    }catch(error){
        error += 1;
        console.log(`Error Capturado: ${error}`);
    }finally{
        console.log(`[${nmr_errors}] Proceso finalizado`)
    }
    
};

// createUser();


const updateUserById = async() => {
    var nmr_errors = 0;

    const URL = `https://appgizlorecords.herokuapp.com/api/es/usuario/v1`;
    const user = JSON.stringify({
        "id": "ddeb2c19-1b90-4b83-be73-8ab11eae3565",
        "nombreCompleto": "Efren",
        "email": "efrengg@gmail.com",
        "contrasenia": "root",
        "estado": "ACTIVO" /*ACTIVO */
    });

    const options = {
        method: 'PUT',
        body: user,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    try{
        const response = await fetch(URL, options);
        console.log(response);

        if(response.status ===200){
            const datos = await response.json();
            console.log(datos);
        }

    }catch(error){
        console.log(`Error capturado${error}`)
    }finally{
        console.log(`[${nmr_errors}] Proceso finalizado`)
    }
};
// updateUserById()


const deleteUserById = async() => {
    var nmr_errors = 0;
    const URL = `https://appgizlorecords.herokuapp.com/api/es/usuario/v1/${"e07a4a9c-858f-4f27-bf3f-e0a26b66c211"}`

    const user = JSON.stringify({
        "id": "ddeb2c19-1b90-4b83-be73-8ab11eae3565",
    });
    
    const options = {
        method: 'DELETE',
        body: user,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    try{
        const response = await fetch(URL, options);
        console.log(response);

        if(response.status === 200){
            const datos = await response.json();
            console.log(datos);
        }

    }catch(error){
        console.log(`Error capturado: ${error}`)
    }finally{
        console.log(`[${nmr_errors}] Proceso finalizado`)
    }

}

// deleteUserById();
