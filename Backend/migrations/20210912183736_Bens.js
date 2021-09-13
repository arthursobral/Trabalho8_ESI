
exports.up = function(knex) {
    return knex.schema.createTable('Bens', table => {
        table.increments('idBens').primary()
        table.string('nomeBens',50)
        table.text('descBens')
        table.integer('idEndereco').references('idEndereco').inTable('Endereco')
        table.integer('idTipoBens').references('idTipoBens').inTable('TipoBens')
        table.integer('idContribuinte').references('idContribuinte').inTable('Contribuinte')
    }).then(() => {
        return knex('Bens').insert([
            {
                nomeBens: 'Residencia domiciliar',
                descBens: 'Casa atual',
                idEndereco: 1,
                idTipoBens: 1,
                idContribuinte: 1
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Bens')
};
