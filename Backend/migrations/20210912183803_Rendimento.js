
exports.up = function(knex) {
    return knex.schema.createTable('Rendimento', table => {
        table.increments('idRendimento').primary()
        table.integer('idContribuinte').references('idContribuinte').inTable('Contribuinte')
        table.integer('idEmpresa').references('idEmpresa').inTable('Empresa')
        table.double('valor_recRendimento')
        table.string('inssRendimento',30)
        table.double('irrf_pagoRendimento')
        table.double('salarioRendimento')
    }).then(() => {
        return knex('Rendimento').insert([
            {
                idContribuinte: 1,
                idEmpresa: 1,
                valor_recRendimento: 8919.13,
                inssRendimento: '96568402370',
                irrf_pagoRendimento: 2743.46,
                salarioRendimento: 44535.74,
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Rendimento')
};
