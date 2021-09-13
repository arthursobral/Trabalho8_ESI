const TipoRua = require('./TipoRua');

class Rua{
    id;
    nome;
    siglaTipoRua = new TipoRua();
}

module.exports = Rua;