import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Database } from 'src/database/database';
import { User } from './users.model';

@Injectable()
export class UsersRepository {
  constructor(private readonly database: Database) {}

  async create(createUserDtoWithHashedPassword: CreateUserDto): Promise<User> {
    const { email, password } = createUserDtoWithHashedPassword;
    const databaseResponse = await this.database
      .insertInto('users')
      .values({
        email,
        password,
      })
      .returningAll()
      .executeTakeFirst();

    return new User(databaseResponse);
  }

  async findByEmail(email: string): Promise<User> {
    const databaseResponse = await this.database
      .selectFrom('users')
      .where('email', '=', email)
      .selectAll()
      .executeTakeFirst();

    if (databaseResponse) {
      return new User(databaseResponse);
    }
  }
}
