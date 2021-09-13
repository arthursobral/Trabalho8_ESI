
exports.up = function(knex) {
    return knex.schema.createTable('Email', table => {
        table.increments('idEmail').primary()
        table.string('emailEmail',50)
        table.integer('idContribuinte').references('idContribuinte').inTable('Contribuinte')
    }).then(() => {
        return knex('Email').insert([
            {
                emailEmail: 'teste@gmail.com',
                idContribuinte: 1
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Email')
};
