import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/dto/user-response.dto';
import { SignInDto, SignUpDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { JwtToken } from './dto/jwt-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  private readonly roundsBcrypt = 12;

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.roundsBcrypt);
  }

  async validateUser(signInDto: SignInDto): Promise<User> {
    const { email, password } = signInDto;
    const user = await this.usersService.findByEmailForAuth(email);

    if (!user) throw new UnauthorizedException();

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: usersPassword, ...rest } = user;
      return rest as User;
    }

    return null;
  }

  async signUp(signUpDto: SignUpDto): Promise<User> {
    const { email, password } = signUpDto;
    if (await this.usersService.isEmailTaken(email)) {
      throw new ForbiddenException();
    }

    const hashedPassword = await this.hashPassword(password);

    const createdUser = this.usersService.createUser({
      email,
      hashedPassword,
    });

    return createdUser;
  }

  async signIn(user: User): Promise<JwtToken> {
    const payload = { id: user.id };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
}
