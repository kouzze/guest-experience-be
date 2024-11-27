import { Body, Controller, Post } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './entities/dto/create-property.dto';
import { Property } from './entities/property.entity';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) { }

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertyService.create(createPropertyDto);
  }
}
