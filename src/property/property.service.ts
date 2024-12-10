import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './entities/dto/create-property.dto';
import { Property } from './entities/property.entity';
import { User } from 'src/user/entities/user.entity';
import { Photos } from 'src/photos/entities/photos.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Photos)
    private readonly photosRepository: Repository<Photos>
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

    const savedProperty = await this.propertyRepository.save(property);

    const photo = this.photosRepository.create({
      url: createPropertyDto.photos,
      description: '',
      property: savedProperty,
    });

    await this.photosRepository.save(photo);

    return this.propertyRepository.findOne({
      where: { id: savedProperty.id },
      relations: ['fotos'],
    });
  }

  async findAll(): Promise<Property[]> {
    return this.propertyRepository.find({ relations: ['fotos'] });
  }
}