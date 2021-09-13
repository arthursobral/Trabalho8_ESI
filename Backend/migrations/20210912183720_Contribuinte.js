
exports.up = function(knex) {
    return knex.schema.createTable('Contribuinte', table => {
        table.increments('idContribuinte').primary()
        table.string('nomeContribuinte',100)
        table.string('sobrenomeContribuinte',100)
        table.string('cpfContribuinte',11)
        table.string('cnpjContribuinte',14)
        table.integer('nrocasaContribuinte')
        table.datetime('data_nascContribuinte')
        table.integer('idEndereco').references('idEndereco').inTable('Endereco')
        table.integer('idTipoContribuinte').references('idTipoContribuinte').inTable('TipoContribuinte')
    }).then(() => {
        return knex('Contribuinte').insert([
            {
                nomeContribuinte: 'Serginho',
                sobrenomeContribuinte: 'Silva',
                cpfContribuinte: '32189013287',
                cnpjContribuinte: '',
                nrocasaContribuinte: 350,
                data_nascContribuinte: '09/09/99',
                idEndereco: 1,
                idTipoContribuinte: 1
            },
            {
                nomeContribuinte: 'Joazin',
                sobrenomeContribuinte: 'Silva',
                cpfContribuinte: '',
                cnpjContribuinte: '32189013238823',
                nrocasaContribuinte: 350,
                data_nascContribuinte: '08/08/98',
                idEndereco: 1,
                idTipoContribuinte: 2
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Contribuinte')
};
