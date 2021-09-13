const Empresa = require('./Empresa')

class Rendimento{
    valor;
    inss;
    irrf;
    salario;
    empresa = new Empresa();
}

module.exports = Rendimento;