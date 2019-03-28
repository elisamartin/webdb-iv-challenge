exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredients', (table) => {
		table.increments();

		table.string('ingredient', 128).notNullable();

		table.integer('quantity').notNullable();

		table.string('unit_of_measurement').notNullable();

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
	return knex.schema.dropTableIfExists('ingredients');
};
