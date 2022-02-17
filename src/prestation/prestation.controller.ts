import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { PrestationService } from './prestation.service';
import { UpdatePrestationDto } from './dto/update-prestation.dto';
import { CreatePrestationDto } from './dto/create-prestation.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/upload';

@Controller('api/v1/prestation')
export class PrestationController {
  constructor(private readonly prestationService: PrestationService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName
      }),
      fileFilter: imageFileFilter
    })
  )
  async create(@UploadedFile() file, @Body() createPrestationDto:CreatePrestationDto) {
    return this.prestationService.create(createPrestationDto, file);
  }

  /**
   * Get image upload data
   * @param image
   * @param res
   */
  @Get('uploaded/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
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
