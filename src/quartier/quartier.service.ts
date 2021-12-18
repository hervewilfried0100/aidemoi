import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuartierDto } from './dto/create-quartier.dto';
import { UpdateQuartierDto } from './dto/update-quartier.dto';

@Injectable()
export class QuartierService {
  constructor(private prismaService: PrismaService) {}
  create(createQuartierDto: CreateQuartierDto) {
    return this.prismaService.quartier.create({
      data: {
        ...createQuartierDto,
        commune: {
          connect: {
            id: createQuartierDto.commune
          }
        }
      }
    });
  }

  findAll() {
    return this.prismaService.quartier.findMany({
      include: {
        commune: true
      }
    });
  }

  findOne(id: string) {
    return this.prismaService.quartier.findUnique({
      where: { id: id },
      include: {
        commune: true
      }
    });
  }

  update(id: string, updateQuartierDto: UpdateQuartierDto) {
    return this.prismaService.quartier.update({
      where: { id: id },
      data: {
        ...updateQuartierDto,
        commune: {
          connect: {
            id: updateQuartierDto.commune
          }
        }
      }
    });
  }

  remove(id: string) {
    return this.prismaService.quartier.delete({ where: { id: id } });
  }
}
