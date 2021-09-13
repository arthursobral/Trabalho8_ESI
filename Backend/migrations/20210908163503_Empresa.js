
exports.up = function(knex) {
    return knex.schema.createTable('Empresa', table => {
        table.increments('idEmpresa').primary()
        table.string('nomeEmpresa',100)
        table.string('cnpjEmpresa',14)
        table.integer('idEndereco').references('idEndereco').inTable('Endereco')
        table.string('nroendEmpresa',16)
    }).then(() => {
        return knex('Empresa').insert([
            {
                nomeEmpresa: 'Teste Empresa',
                cnpjEmpresa: '98974301000110',
                nroendEmpresa: 22,
                idEndereco: 4,
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Empresa')
};
