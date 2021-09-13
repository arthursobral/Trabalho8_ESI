exports.up = function(knex) {
    return knex.schema.createTable('TipoContribuinte', table => {
        table.increments('idTipoContribuinte').primary()
        table.string('nomeTipoContribuinte',50)
    }).then(() => {
        return knex('TipoContribuinte').insert([
            {
                nomeTipoContribuinte: 'Pessoa Fisica',
            },
            {
                nomeTipoContribuinte: 'Pessoa Juridica',
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TipoContribuinte')
};
