import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photos } from './entities/photos.entity';
import { Property } from 'src/property/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {

  constructor(
    @InjectRepository(Photos)
    private readonly photosRepository: Repository<Photos>,
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) { }

  async savePhoto(createPhotoDto: { url: string; description: string; propertyId: number }): Promise<Photos> {
    const property = await this.propertyRepository.findOneBy({ id: createPhotoDto.propertyId });
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    const photo = this.photosRepository.create({
      url: createPhotoDto.url,
      description: createPhotoDto.description,
      property,
    });

    return this.photosRepository.save(photo);
  }
}