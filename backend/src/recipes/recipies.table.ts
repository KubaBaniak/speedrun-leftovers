import { Generated } from 'kysely';

export interface RecipiesTable {
  id: Generated<number>;
  title: string;
  preparation: string;
  authorId: Generated<number>;
}
