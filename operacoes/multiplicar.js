const fs = require('fs');

let criarArquivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Erro! O valor digitado não é uma número.');
            return;
        }

        let dados = '';

        for (let i = 1; i <= 10; i++) {
            dados += `${base} X ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tabelas/tabela-${base}.txt`, dados, (err) => {
            if (err) reject(err);
            else resolve(`tabela-${base}.txt`);
            console.log('Arquivo criado!');
        });
    });
}

module.exports = {
    criarArquivo
}