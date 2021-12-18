import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVilleDto } from './dto/create-ville.dto';
import { UpdateVilleDto } from './dto/update-ville.dto';

@Injectable()
export class VilleService {
  constructor(private prisma: PrismaService) {}
  create(createVilleDto: CreateVilleDto) {
    return this.prisma.ville.create({
      data: createVilleDto,
      include: {
        prestataires: true,
        communes: true
      }
    });
  }

  findAll() {
    return this.prisma.ville.findMany({
      include: {
        prestataires: true,
        communes: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.ville.findUnique({ where: { id: id } });
  }

  update(id: string, updateVilleDto: UpdateVilleDto) {
    return this.prisma.ville.update({
      where: { id: id },
      data: updateVilleDto
    });
  }

  remove(id: string) {
    return this.prisma.ville.delete({ where: { id: id } });
  }
}
