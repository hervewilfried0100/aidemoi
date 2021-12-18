import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestataireDto } from './dto/create-prestataire.dto';
import { UpdatePrestataireDto } from './dto/update-prestataire.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrestataireService {

  constructor(private prisma: PrismaService) {}

  async create(createPrestataireDto: CreatePrestataireDto) {
    const telephoneExist = await this.prisma.prestataire.findUnique({
      where: {
        telephone: createPrestataireDto.telephone
      }
    });

    if (telephoneExist) {
      throw new HttpException('USER_EXIST', HttpStatus.FORBIDDEN)
    }
    return this.prisma.prestataire.create({
            data: {
              ...createPrestataireDto,
              ville: {
                connect: {
                  id: createPrestataireDto.ville
                }
              },
              commune: {
                connect: {
                  id: createPrestataireDto.commune
                }
              },
              quartier: {
                connect: {
                  id: createPrestataireDto.quartier
                }
              },
              prestation: {
                connect: {
                  id: createPrestataireDto.prestation
                }
              },
              utilisateur: {
                connect: {
                  id: createPrestataireDto.utilisateur
                }
              }
            }
    });
  }

  findAll() {
    try {
      return this.prisma.prestataire.findMany({
        include: {
          ville: true,
          commune: true,
          prestation: true
        }
      });
    } catch (e) {
      throw new HttpException('LOAD_DATA_ERROR', HttpStatus.FORBIDDEN);
    }
  }

  findOne(id: string) {
    try {
      return this.prisma.prestataire.findUnique({
        where: { id: id },
        include: {
          ville: true,
          commune: true,
          prestation: true
        }
      });
    }catch (e) {
      throw new HttpException('LOAD_DATA_ERROR', HttpStatus.FORBIDDEN);
    }

  }

  findByPrestation(id: string) {
    return this.prisma.prestataire.findMany({
      where: {
        prestation: {
          id: id
        }
      }
    })
  }

  effectuerPaiement(id: string){
    try{
      return this.prisma.prestataire.update({
        where: { id: id },
        data: {
          aPayer: true
        }
      })
    } catch (e) {
      throw new HttpException('PAIEMENT_FAIL', HttpStatus.FORBIDDEN);
    }
  }

  update(id: string, updatePrestataireDto: UpdatePrestataireDto) {
    return this.prisma.prestataire.update({
      where: { id: id },
      data: {
        ...updatePrestataireDto,
        ville: {
          connect: {
            id: updatePrestataireDto.ville
          }
        },
        commune: {
          connect: {
            id: updatePrestataireDto.commune
          }
        },
        quartier: {
          connect: {
            id: updatePrestataireDto.quartier
          }
        },
        prestation: {
          connect: {
            id: updatePrestataireDto.prestation
          }
        },
        utilisateur: {
          connect: {
            id: updatePrestataireDto.utilisateur
          }
    }
      }
    });
  }

  remove(id: string) {
    return this.prisma.prestataire.delete({ where: { id: id} });
  }
}
