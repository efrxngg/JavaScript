/* 
accion = desarrollo de la promesa
consumidor = 
resultado = satisfecho o rechazado
Estado = estado de la promesa pendiente, satisfecha, rechazada
*/

function printHTML(msg){
    document.querySelector("#respuesta").innerHTML = msg;
}

// Cliente - Pendiente
let desarrollo = new Promise(function(resolve, reject){
    let delay = 1000;
    const proyecto = "producto";
    let status = Math.random();
    
    // Repuesta
    setTimeout(() => {
        if(status < 0.4){
            resolve(proyecto);
        }
        else{
            reject("No entregado ha tiempo");
        }
    }, delay);

});

desarrollo
    // then Se ejecuta cuando hay un resultado satisfactorio
    .then((proyecto)=>{printHTML(proyecto)})
    // catch reacciona con reject
    .catch((error) => { printHTML(error)})
    // Siempre se ejecuta al finalizar 
    .finally(()=>{printHTML("La promesa ha terminado")});


export{printHTML};