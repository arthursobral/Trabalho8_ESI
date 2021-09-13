
exports.up = function(knex) {
    return knex.schema.createTable('UnidadeFederacao', table => {
        table.string('siglaUF',2).primary()
        table.string('nomeUF', 50)
    }).then(() => {
        return knex('UnidadeFederacao').insert([
            {
                siglaUF: 'PR',
                nomeUF: 'Parana'
            }
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('UnidadeFederacao')
};
