import { Kysely } from 'kysely';

export async function up(database: Kysely<unknown>): Promise<void> {
  await database.schema
    .createTable('recipes')
    .addColumn('id', 'serial', (column) => column.primaryKey())
    .addColumn('title', 'text', (column) => column.notNull())
    .addColumn('preparation', 'text', (column) => column.notNull())
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  database.schema.dropTable('articles');
}
