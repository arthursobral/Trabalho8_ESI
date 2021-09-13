const TipoBens = require('./TipoBens');

export default class Bens{
    id;
    description;
    tipo = new TipoBens();
}

module.exports = Bens;