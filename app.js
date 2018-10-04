const argv = require('./config/yargs').argv;
const colors = require('colors');
const { createFile, listTable } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listTable(argv.base, argv.limite)
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        createFile(argv.base, argv.limite)
            .then(file => console.log(`File created:`, colors.green(`${file}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];
console.log(argv);