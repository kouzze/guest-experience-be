import { Transform } from "class-transformer";
import { IsEmail, IsInt, IsOptional, IsString, MinLength } from "class-validator";

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  @Transform(({ value }) => value.trim())
  password: string;

  @IsInt()
  @IsOptional()
  userId:number;
}