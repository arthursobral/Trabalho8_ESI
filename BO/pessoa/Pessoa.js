const EnderecoEspecifico = require('../endereco/EnderecoEspecifico')
const Email = require('./Email')
const Telefone = require('./Telefone')

class Pessoa{
    nome;
    endereco = new EnderecoEspecifico();
    email = new Email();
    telefone=  new Telefone();
}

module.exports = Pessoa;