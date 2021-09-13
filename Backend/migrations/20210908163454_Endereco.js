
exports.up = function(knex) {
    return knex.schema.createTable('Endereco', table => {
        table.increments('idEndereco').primary()
        table.integer('idRua').references('idRua').inTable('Rua')
        table.integer('idBairro').references('idBairro').inTable('Bairro')
        table.integer('idCidade').references('idCidade').inTable('Cidade')
        table.string('cepEndereco',16)
        table.string('compleEndereco',100)
    }).then(() =>{
        return knex('Endereco').insert([
            {
                idRua: 1,
                idBairro: 1,
                idCidade: 1,
                cepEndereco: '85857750',
                compleEndereco: 'teste 1'
            },
            {
                idRua: 3,
                idBairro: 2,
                idCidade: 1,
                cepEndereco: '85853450',
                compleEndereco: 'teste 2'
            },
            {
                idRua: 3,
                idBairro: 2,
                idCidade: 1,
                cepEndereco: '85853645',
                compleEndereco: 'teste 3'
            },
            {
                idRua: 3,
                idBairro: 2,
                idCidade: 1,
                cepEndereco: '85853416',
                compleEndereco: 'teste 4'
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Endereco')
};
