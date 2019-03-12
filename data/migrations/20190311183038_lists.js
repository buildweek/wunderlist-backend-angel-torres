
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lists', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.integer('userId').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('lists');
};
