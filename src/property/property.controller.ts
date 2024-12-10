import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guard/guard.guard';
import { CreatePropertyDto } from './entities/dto/create-property.dto';
import { Property } from './entities/property.entity';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) { }

  // @Post()
  // @UseGuards(AuthGuard)
  // async create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
  //   return this.propertyService.create(createPropertyDto);
  // }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @Get('/properties')
  async findAll(): Promise<Property[]> {
    return this.propertyService.findAll();
  }
}