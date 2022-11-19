/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsNotEmpty({
    message: 'name is required',
  })
  @IsString({
    message: 'name must be a string',
  })
  name: string;

  @IsNotEmpty({
    message: 'name is required',
  })
  @IsEmail({
    message: 'email must be valid email',
  })
  email: string;

  @IsNotEmpty({
    message: 'password is required',
  })
  @IsString({
    message: 'password must be a string',
  })
  password: string;
}
