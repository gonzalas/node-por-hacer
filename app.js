const argv = require('./config/yargs').argv;

const color = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        console.log('\n');

        for (let tarea of listado) {

            if (tarea.completado === argv.completado) {

                console.log('==========Por hacer==========='.yellow);
                console.log('Tarea: ', tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('\n');
            }
        }


        break;

    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no reconocido.');
}