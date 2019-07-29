const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea para realizar', descripcion)
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('listar', 'Muestra las tareas', {
        completado: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Selecciona las tareas que deseas ver'
        }
    })
    .command('borrar', 'Elimina una tarea de la lista', descripcion)
    .help()
    .argv

module.exports = {
    argv
}