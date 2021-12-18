import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestationService } from './prestation.service';
import { UpdatePrestationDto } from './dto/update-prestation.dto';
import { CreatePrestationDto } from './dto/create-prestation.dto';

@Controller('api/v1/prestation')
export class PrestationController {
  constructor(private readonly prestationService: PrestationService) {}

  @Post()
  async create(@Body() createPrestationDto:CreatePrestationDto) {
    return this.prestationService.create(createPrestationDto);
  }

  @Get()
  findAll() {
    return this.prestationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestationDto: UpdatePrestationDto) {
    return this.prestationService.update(id, updatePrestationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestationService.remove(id);
  }
}
