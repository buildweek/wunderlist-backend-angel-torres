
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('username', 255).unique().notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
