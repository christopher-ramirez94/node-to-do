const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];

switch(command){
    
    case 'crear':
        let task = toDo.crear(argv.descripcion);
        console.log(task);
    break;
    case 'listar':
        let list = toDo.getList();
        for(let toDo of list){
            console.log('====To Do===='.green);
            console.log(toDo.description);
            console.log('Estado: ', toDo.complete);
            console.log('============='.green);
        }
    break;
    case 'actualizar':
        let update = toDo.update(argv.descripcion, argv.completado);
        console.log(update);
    break;
    case 'borrar':
        let borrado = toDo.deleteDB(argv.descripcion);
        for(let toDo of borrado){
            console.log('====To Do===='.green);
            console.log(toDo.description);
            console.log('Estado: ', toDo.complete);
            console.log('============='.green);
        }
    break;
    default:
        console.log('comando no valido');
}