import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { AuthGuard } from 'src/auth/guard/guard.guard';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) { }

  @Post('upload')
  @UseGuards(AuthGuard)
  async uploadPhoto(@Body() createPhotoDto: { url: string; description: string; propertyId: number }) {
    return this.photosService.savePhoto(createPhotoDto);
  }
}