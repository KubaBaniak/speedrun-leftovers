import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly roundsBcrypt = 12;

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.roundsBcrypt);
  }
}
