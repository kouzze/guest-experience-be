import { IsDateString, IsInt, IsNumber, IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class CreatePropertyDto {
  @IsInt()
  @IsOptional()
  userId?: number;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  description: string;

  @IsString()
  @MinLength(3)
  location: string;

  @IsNumber()
  price_per_night: number;

  @IsNumber()
  capacity: number;

  @IsDateString()
  createdAt: Date;

  @IsUrl()
  photos: string;

}
