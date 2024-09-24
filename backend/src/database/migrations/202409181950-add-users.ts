import { Kysely } from 'kysely';

export async function up(database: Kysely<unknown>): Promise<void> {
  await database.schema
    .createTable('users')
    .addColumn('id', 'serial', (column) => column.primaryKey())
    .addColumn('email', 'text', (column) => column.notNull())
    .addColumn('password', 'text', (column) => column.notNull())
    .execute();

  await database.schema
    .alterTable('recipes')
    .addColumn('authorId', 'integer', (column) => column.references('users.id'))
    .execute();

  await database.schema
    .alterTable('recipes')
    .alterColumn('authorId', (column) => column.setNotNull())
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  database.schema.dropTable('articles');
}
