import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { SignInDto } from '../user/user.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('sign-up')
    async signUp(@Body() authDto: SignInDto) {
        return this.authService.signUp(authDto).then((user) => ({
            user,
            token: this.authService.getJwt(user.id),
        }));
    }

    @Post('sign-in')
    async signIn(@Body() authDto: SignInDto) {
        return this.authService.signIn(authDto).then((user) => ({
            user,
            token: this.authService.getJwt(user.id),
        }));
    }
}
