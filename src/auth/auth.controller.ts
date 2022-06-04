import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() acd: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(acd);
  }

  @Post('/signin')
  signIn(@Body() acd: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(acd);
  }
}
