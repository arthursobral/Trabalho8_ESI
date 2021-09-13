const Bairro = require('./Bairro');
const Rua = require('./Rua');
const Cidade = require('./Cidade');

class Endereco{
    id;
    cep;
    rua = new Rua();
    bairro = new Bairro();
    cidade = new Cidade();
    complemento;
}

module.exports = Endereco;