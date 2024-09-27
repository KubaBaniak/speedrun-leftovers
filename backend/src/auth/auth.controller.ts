import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/dto';
import { SignInDto, SignUpDto } from './dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser, CurrentUserId } from '../utils/decorators';
import { JwtToken } from './dto/jwt-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<User> {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(
    @Body() _signInDto: SignInDto,
    @CurrentUser() user: User,
  ): Promise<JwtToken> {
    return this.authService.signIn(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  test(@CurrentUserId() userId: number) {
    return userId;
  }
}
