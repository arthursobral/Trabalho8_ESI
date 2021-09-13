
exports.up = function(knex) {
    return knex.schema.createTable('TipoDependente', table => {
        table.increments('idTipoDependente').primary()
        table.string('nomeTipoDependente',50)
    }).then(() => {
        return knex('TipoDependente').insert([
            {
                nomeTipoDependente: 'Irmao'
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TipoDependente')
};
