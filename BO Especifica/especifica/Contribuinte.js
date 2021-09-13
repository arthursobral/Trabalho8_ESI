const PessoaFisica = require('../../BO/pessoa/PessoaFisica');
const TipoContribuinte = require('./TipoContribuinte');
const Rendimento = require('./Rendimento');

class Contribuinte extends PessoaFisica{
    id;
    tipo = new TipoContribuinte();
    rendimento = new Rendimento();
}

module.exports = Contribuinte;