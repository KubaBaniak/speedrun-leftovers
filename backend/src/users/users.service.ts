import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUser } from './models/auth-users.model';
import { User } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async isEmailTaken(email: string): Promise<boolean> {
    const user = await this.usersRepository.findByEmail(email);
    return !!user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, hashedPassword } = createUserDto;

    const createdUser = this.usersRepository.create({
      email,
      hashedPassword,
    });

    return createdUser;
  }

  async findByEmailForAuth(email: string): Promise<AuthUser> {
    return this.usersRepository.findByEmailForAuth(email);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
