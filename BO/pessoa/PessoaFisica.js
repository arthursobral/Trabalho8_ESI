const Pessoa = require('./Pessoa')

class PessoaFisica extends Pessoa {
    cpf;
    sobrenome;
    data;
}

module.exports = PessoaFisica;