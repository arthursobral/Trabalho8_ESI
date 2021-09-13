module.exports = {
    client: 'postgresql',
    connection: {
        database: 'trabalho8',
        user:     'postgres',
        password: '4526'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
  