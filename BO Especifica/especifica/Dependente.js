const PessoaFisica = require('./pessoa/PessoaFisica')

class Dependente extends PessoaFisica{
    id;
    name;
}

module.exports = Dependente;