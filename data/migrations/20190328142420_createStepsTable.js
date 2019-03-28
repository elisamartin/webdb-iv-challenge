exports.up = function(knex, Promise) {
	return knex.schema.createTable('steps', (table) => {
		table.increments();

		table.string('steps', 400).notNullable();

		table
			.integer('recipe_id')
			.unsigned()
			.references('id')
			.inTable('recipe')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('steps');
};
