import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PrestataireService } from './prestataire.service';
import { CreatePrestataireDto } from './dto/create-prestataire.dto';
import { UpdatePrestataireDto } from './dto/update-prestataire.dto';

@Controller('api/v1/prestataire')
export class PrestataireController {
  constructor(private readonly prestataireService: PrestataireService) {}

  @Post()
  create(@Body() createPrestataireDto: CreatePrestataireDto) {
    return this.prestataireService.create(createPrestataireDto);
  }

  @Get()
  findAll() {
    return this.prestataireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestataireService.findOne(id);
  }

  @Get('get-prestations/:id')
  findPrestataire(@Param('id') id: string) {
    return this.prestataireService.findByPrestation(id);
  }


  @Put('pay/:id')
  makePay(@Param('id') id: string) {
    return this.prestataireService.effectuerPaiement(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrestataireDto: UpdatePrestataireDto) {
    return this.prestataireService.update(id, updatePrestataireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestataireService.remove(id);
  }
}
