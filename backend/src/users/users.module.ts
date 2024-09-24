import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, AuthService],
})
export class UsersModule {}
