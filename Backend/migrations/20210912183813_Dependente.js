
exports.up = function(knex) {
    return knex.schema.createTable('Dependente', table => {
        table.increments('idDependente').primary()
        table.string('nomeDependente',100)
        table.string('cpfDependente',11)
        table.integer('nrocasaDependente')
        table.datetime('data_nascDependente')
        table.integer('idEndereco').references('idEndereco').inTable('Endereco')
        table.integer('idTipoDependente').references('idTipoDependente').inTable('TipoDependente')
        table.integer('idContribuinte').references('idContribuinte').inTable('Contribuinte')
    }).then(() => {
        return knex('Dependente').insert([
            {
                nomeDependente: 'Jaozao da Silva',
                cpfDependente: '91823789127',
                nrocasaDependente: 23,
                data_nascDependente: '13/01/91',
                idEndereco: 1,
                idTipoDependente: 1,
                idContribuinte: 1
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Dependente')
};
