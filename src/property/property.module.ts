import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Property } from './entities/property.entity';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService],
  imports: [TypeOrmModule.forFeature([Property]), UserModule],
  exports: [PropertyService, TypeOrmModule],
})
export class PropertyModule {}
