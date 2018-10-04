const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Permite listar la tablas de multiplicación', opts)
    .command('crear', 'Permite crear la tablas de multiplicación', opts)
    .help()
    .argv;


module.exports = {
    argv
}