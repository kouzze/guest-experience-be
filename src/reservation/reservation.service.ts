import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/property/entities/property.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,

    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const property = await this.propertyRepository.findOneBy({ id: createReservationDto.propertyId });
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    const user = await this.userRepository.findOneBy({ id: createReservationDto.userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (property.status === 'reservado') {
      throw new BadRequestException('Property is not available for reservation');
    }

    property.status = 'reservado';
    await this.propertyRepository.save(property);

    const reservation = this.reservationRepository.create({
      ...createReservationDto,
      property,
      user,
    });

    return this.reservationRepository.save(reservation);
  }
}
