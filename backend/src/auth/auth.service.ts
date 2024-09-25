import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  roundsBcrypt = 12;

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.roundsBcrypt);
  }
}
