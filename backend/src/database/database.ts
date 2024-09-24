import { Kysely } from 'kysely';
import { RecipiesTable } from 'src/recipes/recipies.table';
import { UsersTable } from 'src/users/users.table';

export interface Tables {
  users: UsersTable;
  recipies: RecipiesTable;
}

export class Database extends Kysely<Tables> {}
