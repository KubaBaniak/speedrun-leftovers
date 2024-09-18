import { Kysely } from 'kysely';
import { RecipiesTable } from 'src/recipes/recipiesTable';

export interface Tables {
  recipies: RecipiesTable;
}

export class Database extends Kysely<Tables> {}
