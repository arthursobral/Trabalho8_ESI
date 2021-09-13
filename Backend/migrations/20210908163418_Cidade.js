
exports.up = function(knex) {
    return knex.schema.createTable('Cidade', table => {
        table.increments('idCidade').primary()
        table.string('siglaUF').references('siglaUF').inTable('UnidadeFederacao')
        table.string('nomeCidade',50)
    }).then(() =>{
        return knex('Cidade').insert([
            {
                siglaUF: 'PR',
                nomeCidade: 'Foz do Iguacu'
            }
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Cidade')
};
