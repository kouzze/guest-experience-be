import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { AuthGuard } from 'src/auth/guard/guard.guard';
import { DeleteReservationDto } from './dto/delete-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) { }

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto): Promise<Reservation> {
    return this.reservationService.create(createReservationDto);
  }

  @Get()
  async findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  @Delete()
  @UseGuards(AuthGuard)
  async remove(@Body() deleteReservationDto: DeleteReservationDto, @Request() req): Promise<void> {
    return this.reservationService.remove(deleteReservationDto, req.user.id);
  }
}