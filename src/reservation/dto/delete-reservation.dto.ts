import { IsNumber } from 'class-validator';

export class DeleteReservationDto {

  @IsNumber()
  id: number;
}