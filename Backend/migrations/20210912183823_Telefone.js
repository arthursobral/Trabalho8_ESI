
exports.up = function(knex) {
    return knex.schema.createTable('Telefone', table => {
        table.increments('idTelefone').primary()
        table.string('telTelefone',50)
        table.integer('idContribuinte').references('idContribuinte').inTable('Contribuinte')
    }).then(() => {
        return knex('Telefone').insert([
            {
                telTelefone: '998090898',
                idContribuinte: 1
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Telefone')
};
