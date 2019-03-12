
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lists', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.date('dueDate').notNullable();
        table.boolean('completed')
        table.integer('userId').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('lists');
};