//requireds
const fs = require('fs');
const colors = require('colors');

let listTable = (base, limite) => {
    console.log('========================'.green);
    console.log(`Table of: ${base}`.green);
    console.log(`========================`.red);

    let data = '';
    for (let index = 0; index <= limite; index++) {
        data += `${base} * ${index} = ${base * index}\n`;
    }
    console.log(data);
}

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`files/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });
    });
};

module.exports = {
    createFile,
    listTable
}