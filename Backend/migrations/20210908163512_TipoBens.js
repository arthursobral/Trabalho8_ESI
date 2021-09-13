
exports.up = function(knex) {
    return knex.schema.createTable('TipoBens', table => {
        table.increments('idTipoBens').primary()
        table.string('nomeTipoBens',50)
    }).then(() => {
        return knex('TipoBens').insert([
            {
                nomeTipoBens: 'Casa'
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TipoBens')
};
