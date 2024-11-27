import { Body, Controller, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
    return this.reservationService.create(createReservationDto);
  }
}
