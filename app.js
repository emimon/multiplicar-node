const { criarArquivo } = require('./operacoes/multiplicar');

let base = 'abc';

criarArquivo(base)
    .then(arquivo => console.log(`Arquivo criado: ${arquivo}`))
    .catch(e => console.log(e));