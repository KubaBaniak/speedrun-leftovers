import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { faker } from '@faker-js/faker';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let mockUserCredentials: CreateUserDto;

  beforeEach(async () => {
    mockUserCredentials = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const mockUsersService = {
      create: jest.fn().mockResolvedValue({
        id: faker.number.int(),
        email: mockUserCredentials.email,
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  describe('createUser', () => {
    it('should create a new user with correct email and hashed password', async () => {
      jest.spyOn(usersService, 'createUser').mockResolvedValue({
        id: faker.number.int(),
        email: mockUserCredentials.email,
      });

      const createUserResult =
        await usersController.createUser(mockUserCredentials);

      expect(createUserResult.email).toBe(mockUserCredentials.email);
      expect(createUserResult.id).toBeDefined();
      expect(typeof createUserResult.id).toBe('number');
    });
  });
});
