import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommuneDto } from './dto/create-commune.dto';
import { UpdateCommuneDto } from './dto/update-commune.dto';
import { CommuneEssentielVM } from './vm/commune-vm';

@Injectable()
export class CommuneService {

  constructor(private prisma: PrismaService) {}

  create(communeData: CreateCommuneDto) {
    return this.prisma.commune.create({
      data: {
        ...communeData,
        ville: {
          connect: {
            id: communeData.ville
          }
        }
      },
      include: {
        prestataires: true,
        quartiers: true

      }
    });
  }

  findAll() {
    return this.prisma.commune.findMany({
      include: {
        ville: true,
        quartiers: true,
        prestataires: true
      }
    });
  }

  async recupererCommuneParVille(id: string){
    try{
      const communes = await this.prisma.commune.findMany({
        where: { villeId: id }
      });
      const communeEssentiel = communes.map((commune) => new CommuneEssentielVM({
        id: commune.id,
        label: commune.label
      }));
      return communeEssentiel;
    } catch(e) {
      throw new HttpException('LOADED_FAILED', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: string) {
    return this.prisma.commune.findUnique({
      where: { id: id },
      include: {
        ville : true,
        quartiers: true,
        prestataires: true
      }
    });
  }

  update(id: string, communeDtoData: UpdateCommuneDto) {
    return this.prisma.commune.update({
      where: { id: id },
      data: {
        ...communeDtoData,
        ville: {
          connect: {
            id: communeDtoData?.ville
          }
        },
      }
    });
  }

  remove(id: string) {
    return this.prisma.commune.delete({ where: { id: id } });
  }
}
