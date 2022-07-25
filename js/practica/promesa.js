var carrito = "";

function printHTML(msg){
    document.querySelector("#respuesta").innerHTML = msg;
}

function hacerLaCompra(delay = 1000){
    
    return new Promise((success, reject)=>{
        setTimeout(() => {
            if(carrito.length<10){
                // Codigo si se cumple
                carrito += "producto";
                success();
            }
            else{
                // Codigo si no se cumple
                reject(new Error("Ha ocurrido algo"));
            }
        }, delay);
    });
}


hacerLaCompra()
    .then(() => {printHTML(carrito)})
    .catch((error) => {printHTML(error.message)})
    .finally(() => {printHTML("Se acabo la compra")});
    