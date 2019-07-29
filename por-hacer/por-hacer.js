const fs = require('fs');

const color = require('colors');

let listadoPorHacer = [];



const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}



const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) {
            throw new Error('No se pudo guardar la tarea.'.red);
        } else
            console.log('La base de datos se actualizó con éxito.'.green);

    });

}


const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
    }


}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    var retorno = '';

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        retorno = 'Tarea actualizada con éxito.'.green;
    } else {
        retorno = 'Error en la actualización de la tarea.'.red;
    }
    return retorno;
}


const borrar = (descripcion) => {

    cargarDB();

    let elemento = listadoPorHacer.find(tarea => tarea.descripcion === descripcion);

    if (elemento) {
        listadoPorHacer.pop(elemento);
        guardarDB();
        var retorno = `La tarea "${elemento.descripcion}" ha sido borrada de la lista.`.green;
    } else {
        var retorno = `No se encontró la tarea "${elemento.descripcion}" o hubo un error para borrarla.`.red;
    }

    return retorno;
}


module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}