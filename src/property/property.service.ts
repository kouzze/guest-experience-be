import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './entities/dto/create-property.dto';
import { Property } from './entities/property.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const user = await this.userRepository.findOneBy({ id: createPropertyDto.userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const property = this.propertyRepository.create({
      ...createPropertyDto,
      users: user,
    });

    return this.propertyRepository.save(property);
  }
}
