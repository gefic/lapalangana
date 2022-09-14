let isOk = true;

const promesa = (tiempo, tarea) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOk) {
                resolve(tarea);
            } else {
                reject("Error en el servidor, intente nuevamente");
            }
        }, tiempo);
    });

}

export default promesa;