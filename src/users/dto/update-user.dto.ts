import { IsEmail, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsOptional()
  @MaxLength(50)
  firstName: string;

  @IsNotEmpty()
  @IsOptional()
  @MaxLength(50)
  lastName: string;
}
