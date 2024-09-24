import { Generated } from 'kysely';
import { RecipiesTable } from 'src/recipes/recipies.table';

export interface UsersTable {
  id: Generated<number>;
  email: string;
  password: string;
  recipies: RecipiesTable[];
}
