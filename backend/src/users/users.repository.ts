import { Injectable } from '@nestjs/common';
import { Database } from '../database/database';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUser } from './models/auth-users.model';
import { User } from './dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly database: Database) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, hashedPassword } = createUserDto;
    const databaseResponse = await this.database
      .insertInto('users')
      .values({
        email,
        password: hashedPassword,
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

  async findByEmailForAuth(email: string): Promise<AuthUser> {
    const databaseResponse = await this.database
      .selectFrom('users')
      .where('email', '=', email)
      .selectAll()
      .executeTakeFirst();

    if (databaseResponse) {
      return new AuthUser(databaseResponse);
    }
  }
}
