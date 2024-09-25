import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { faker } from '@faker-js/faker';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('Hashing', () => {
    it('should hash a given password', async () => {
      const password = faker.internet.password();
      const hashedPassword = await authService.hashPassword(password);
      expect(typeof hashedPassword).toBe('string');
      expect(hashedPassword).not.toBe(password);
    });

    it('should hash the same password twice and return different hashes', async () => {
      const password = faker.internet.password();
      const hash1 = await authService.hashPassword(password);
      const hash2 = await authService.hashPassword(password);
      expect(hash1).not.toEqual(hash2);
    });

    it('should throw an error for null password', async () => {
      await expect(authService.hashPassword(null)).rejects.toThrow();
    });
  });
});
