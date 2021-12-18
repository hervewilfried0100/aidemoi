import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { VilleService } from './ville.service';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';

@Controller('api/v1/ville')
export class VilleController {
  constructor(private readonly villeService: VilleService) {}

  @Post()
  create(@Body() createVilleDto: CreateVilleDto) {
    return this.villeService.create(createVilleDto);
  }

  @Get()
  findAll() {
    return this.villeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVilleDto: UpdateVilleDto) {
    return this.villeService.update(id, updateVilleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villeService.remove(id);
  }
}
