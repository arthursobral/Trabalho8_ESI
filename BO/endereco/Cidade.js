const siglaUF = require('./UF');

class Cidade{
    idCidade;
    nomeCidade;
    siglaUF = new siglaUF();
}

module.exports = Cidade;