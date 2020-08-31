import Knex from 'knex';

//Quais alterações a realizar no db
export async function up(knex: Knex){
    return knex.schema.createTable('db_videos', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('url').notNullable();
        table.integer('fk_categories_id').notNullable().references('id').inTable('db_categories')
        .onUpdate('CASCADE').onDelete('CASCADE');
    });
}

//Rollback em caso de erro
export async function down(knex: Knex){
    return knex.schema.dropTable('db_videos');
}
