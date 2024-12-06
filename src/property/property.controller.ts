import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './entities/dto/create-property.dto';
import { Property } from './entities/property.entity';
import { AuthGuard } from 'src/auth/guard/guard.guard';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) { }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertyService.create(createPropertyDto);
  }
}
