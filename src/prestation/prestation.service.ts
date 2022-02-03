import { Injectable } from '@nestjs/common';
import { CreatePrestationDto } from './dto/create-prestation.dto';
import { UpdatePrestationDto } from './dto/update-prestation.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PrestationEssentielDto } from './dto/prestation-essentiel.dto';

@Injectable()
export class PrestationService {
  constructor(private prismaService: PrismaService) {}

  async create(createPrestationDto: CreatePrestationDto, file: any) {
    const prestation = await this.prismaService.prestation
      .create({
        data: {
          ...createPrestationDto,
          imageUrl: file.filename
        },
        include: {
          prestataires: true
        }
      });

    return new CreatePrestationDto({
      label: prestation.label,
      imageUrl: file.filename,
    });
  }

  async findAll() {
    const prestations =  await this.prismaService.prestation.findMany({
      include: {
        _count: {
          select: {
            prestataires: true
          }
        }
      }
    });

    return prestations.map((prestation) => {
      return new PrestationEssentielDto({
        id: prestation.id,
        label: prestation.label,
        imageUrl: prestation.imageUrl,
        totalPrestation: prestation._count.prestataires
      })
    });
  }

  findOne(id: string) {
    return this.prismaService.prestation.findUnique({
      where: { id: id }
    });
  }

  update(id: string, updatePrestationDto: UpdatePrestationDto) {
    return this.prismaService.prestation.update({
      where: { id: id },
      data: updatePrestationDto
    })
  }

  remove(id: string) {
    return this.prismaService.prestation.delete({
      where: { id: id }
    })
  }
}
