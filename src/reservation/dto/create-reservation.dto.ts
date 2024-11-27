import { IsDateString, IsInt, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateReservationDto {

  @IsDateString()
  date_start: Date;

  @IsDateString()
  date_end: Date;

  @IsNumber()
  total: number;

  @IsInt()
  propertyId: number;

  @IsInt()
  userId: number;
}
