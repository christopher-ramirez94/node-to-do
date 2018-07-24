const descripcion =  {
    demand: true,
    alias: 'd',
    desc: 'descripcion to do'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado'
}


const argv = require('yargs')
                    .command('crear', 'create an element of to do list', {
                        descripcion
                    })
                    .command('actualizar', 'update an element of a to do task',{
                        descripcion,
                        completado
                    })
                    .command('borrar', 'delete an element of to do list', {
                        descripcion
                    })
                    .help()
                    .argv;


module.exports = {
    argv
}