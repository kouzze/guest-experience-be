import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photos } from 'src/photos/entities/photos.entity';
import { UserModule } from 'src/user/user.module';
import { Property } from './entities/property.entity';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports: [TypeOrmModule.forFeature([Property, Photos]), UserModule],
  exports: [PropertyService, TypeOrmModule],
})
export class PropertyModule { }