import { ApiProperty } from '@nestjs/swagger';
import { Length, IsEmail, IsString } from 'class-validator';

export class SignUpDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @Length(1, 255)
    firstName: string;

    @ApiProperty()
    @IsString()
    @Length(1, 255)
    lastName: string;

    @ApiProperty()
    @IsString()
    password: string;
}

export class SignInDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;
}
