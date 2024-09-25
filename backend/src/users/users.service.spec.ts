import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { AuthService } from '../auth/auth.service';
import { faker } from '@faker-js/faker';
import { ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let usersService: UsersService;
  let findByEmailRepositoryMock: jest.Mock;
  let createUserRepositoryMock: jest.Mock;
  let authServiceMock: jest.Mocked<AuthService>;

  let mockUserCredentials: CreateUserDto;

  beforeEach(async () => {
    mockUserCredentials = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    findByEmailRepositoryMock = jest.fn();
    createUserRepositoryMock = jest.fn();
    authServiceMock = {
      hashPassword: jest.fn(),
    } as unknown as jest.Mocked<AuthService>;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: AuthService,
          useValue: authServiceMock,
        },
        {
          provide: UsersRepository,
          useValue: {
            findByEmail: findByEmailRepositoryMock,
            create: createUserRepositoryMock,
          },
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  describe('isEmailTaken', () => {
    it('should return true if an existing user is found by email', async () => {
      const email = mockUserCredentials.email;
      findByEmailRepositoryMock.mockResolvedValue({
        id: faker.number.int(),
        email,
      });

      const isEmailTakenResult = await usersService.isEmailTaken(email);

      expect(isEmailTakenResult).toBeTruthy();
      expect(findByEmailRepositoryMock).toHaveBeenCalledWith(email);
    });

    it('should return false if no user exists with the given email', async () => {
      const email = mockUserCredentials.email;
      findByEmailRepositoryMock.mockResolvedValue(undefined);

      const isEmailTakenResult = await usersService.isEmailTaken(email);

      expect(isEmailTakenResult).toBeFalsy();
      expect(findByEmailRepositoryMock).toHaveBeenCalledWith(email);
    });
  });

  describe('createUser', () => {
    it('should create a new user with correct email and hashed password', async () => {
      const userCredentials = mockUserCredentials;
      authServiceMock.hashPassword.mockResolvedValue('hashedPassword');
      createUserRepositoryMock.mockResolvedValue({
        id: faker.number.int(),
        email: userCredentials.email,
      });

      const createUserResult = await usersService.create(userCredentials);

      expect(createUserResult.email).toBe(userCredentials.email);
      expect(createUserResult.id).toBeDefined();
      expect(typeof createUserResult.id).toBe('number');
      expect(authServiceMock.hashPassword).toHaveBeenCalledWith(
        userCredentials.password,
      );
    });

    it('should throw ForbiddenException if user with given email already exists', async () => {
      findByEmailRepositoryMock.mockResolvedValue(true);
      const userCredentials = mockUserCredentials;

      await expect(usersService.create(userCredentials)).rejects.toThrow(
        ForbiddenException,
      );
      expect(findByEmailRepositoryMock).toHaveBeenCalledWith(
        userCredentials.email,
      );
    });
  });
});
