import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { PrestataireService } from './prestataire.service';
import { CreatePrestataireDto } from './dto/create-prestataire.dto';
import { UpdatePrestataireDto } from './dto/update-prestataire.dto';
import { PrestataireQuery } from './prestation-query';

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
  findPrestataireParPrestation(@Param('id') id: string) {
    return this.prestataireService.findByPrestation(id);
  }

  @Get('query-ville/:id')
  findPrestataireParVille(@Query() query: PrestataireQuery, @Param('id') id: string) {
    const villeId = query.villeId;
    return this.prestataireService.filtrePrestataireParVille(id, villeId);
  }

  @Get('query-commune/:id')
  findPrestataireParCommune(@Query() query: PrestataireQuery, @Param('id') id: string) {
    const communeId = query.communeId;
    return this.prestataireService.filtrePrestataireParCommune(id, communeId);
  }

  @Get('query-quartier/:id')
  findPrestataireParQuartier(@Query() query: PrestataireQuery, @Param('id') id: string) {
    const quartierId = query.quartierId;
    return this.prestataireService.filtrePrestataireParQuartier(id, quartierId);
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
