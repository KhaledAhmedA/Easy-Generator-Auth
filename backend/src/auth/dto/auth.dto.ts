import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  login: string;

  @IsString()
  password: string;
}

export class RefreshTokenDto {
  @IsString()
  name: string;

  @IsString()
  sub: string;
}
