import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CommuneService } from './commune.service';
import { CreateCommuneDto } from './dto/create-commune.dto';
import { UpdateCommuneDto } from './dto/update-commune.dto';
import { CommuneEntity } from './entities/commune.entity';

@Controller('api/v1/commune')
@ApiTags('communes')
export class CommuneController {
  constructor(private readonly communeService: CommuneService) {}

  @Post()
  @ApiCreatedResponse({ type: CommuneEntity })
  create(@Body() createCommuneDto: CreateCommuneDto) {
    return this.communeService.create(createCommuneDto);
  }

  @Get()
  @ApiOkResponse({ type: [CommuneEntity] })
  findAll() {
    return this.communeService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CommuneEntity })
  findOne(@Param('id') id: string) {
    return this.communeService.findOne(id);
  }

  @Get('search-ville/:id')
  recupererCommuneParVille(@Param('id') id: string) {
    return this.communeService.recupererCommuneParVille(id);
  }

  @ApiCreatedResponse({ type: CommuneEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommuneDto: UpdateCommuneDto) {
    return this.communeService.update(id, updateCommuneDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CommuneEntity })
  remove(@Param('id') id: string) {
    return this.communeService.remove(id);
  }
}
