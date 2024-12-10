import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photos } from './entities/photos.entity';
import { Property } from 'src/property/entities/property.entity';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [TypeOrmModule.forFeature([Photos, Property])],
  exports: [PhotosService],
})
export class PhotosModule { }