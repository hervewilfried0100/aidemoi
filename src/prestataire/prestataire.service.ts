import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePrestataireDto } from './dto/create-prestataire.dto';
import { UpdatePrestataireDto } from './dto/update-prestataire.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PrestataireDetailsVM } from './vm/prestataire-vm';

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
    const prestataire = await this.prisma.prestataire.create({
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
              // utilisateur: {
              //   connect: {
              //     id: createPrestataireDto.utilisateur
              //   }
              // }
            }
    });

    return { prestataireId: prestataire.id, telephone: prestataire.telephone };
  }

  async findAll() {
    try {
      const prestataires = await this.prisma.prestataire.findMany({
        include: {
          ville: true,
          commune: true,
          prestation: true,
          quartier: true
        }
      });

      const cleanPrestataire = prestataires.map((prestataire) => new PrestataireDetailsVM({
        id: prestataire.id,
        nom: prestataire.nom,
        prenoms: prestataire.prenoms,
        genre: prestataire.genre,
        telephone: prestataire.telephone,
        ville: prestataire.ville.label,
        commune: prestataire.commune.label,
        quartier: prestataire.quartier.label,
        adresse: prestataire.adresse,
        aPayer: prestataire.aPayer,
        prestation: prestataire.prestation.label,
        dateCreation: prestataire.dateCreation
      }));
      return cleanPrestataire;
    } catch (e) {
      throw new HttpException('LOAD_DATA_ERROR', HttpStatus.FORBIDDEN);
    }
  }

  async filtrePrestataireParVille(prestationId: string, villeId: string) {
    try {
      const prestataires = await this.prisma.prestataire.findMany({
        where: {
          prestation: {
            id: prestationId
          },
          ville: {
            id: villeId
          }
        },
        include: {
          ville: true,
          commune: true,
          prestation: true,
          quartier: true
        }
      });
      const cleanPrestataire = prestataires.map((prestataire) => new PrestataireDetailsVM({
        id: prestataire.id,
        nom: prestataire.nom,
        prenoms: prestataire.prenoms,
        genre: prestataire.genre,
        telephone: prestataire.telephone,
        ville: prestataire.ville.label,
        commune: prestataire.commune.label,
        quartier: prestataire.quartier.label,
        adresse: prestataire.adresse,
        aPayer: prestataire.aPayer,
        prestation: prestataire.prestation.label,
        dateCreation: prestataire.dateCreation
      }));
      return cleanPrestataire;
    } catch(e) {
      throw new HttpException('LOAD_DATA_ERROR', HttpStatus.FORBIDDEN);
    }
  }

  async filtrePrestataireParCommune(prestationId: string, communeId: string) {
    try {
      const prestataires = await this.prisma.prestataire.findMany({
        where: {
          prestation: {
            id: prestationId
          },
          commune: {
            id: communeId
          }
        },
        include: {
          ville: true,
          commune: true,
          prestation: true,
          quartier: true
        }
      });
      const cleanPrestataire = prestataires.map((prestataire) => new PrestataireDetailsVM({
        id: prestataire.id,
        nom: prestataire.nom,
        prenoms: prestataire.prenoms,
        genre: prestataire.genre,
        telephone: prestataire.telephone,
        ville: prestataire.ville.label,
        commune: prestataire.commune.label,
        quartier: prestataire.quartier.label,
        adresse: prestataire.adresse,
        aPayer: prestataire.aPayer,
        prestation: prestataire.prestation.label,
        dateCreation: prestataire.dateCreation
      }));
      return cleanPrestataire;
    } catch(e) {
      throw new HttpException('LOAD_DATA_ERROR', HttpStatus.FORBIDDEN);
    }
  }

  async filtrePrestataireParQuartier(prestationId: string, quartierId: string) {
    try {
      const prestataires = await this.prisma.prestataire.findMany({
        where: {
          prestation: {
            id: prestationId
          },
          quartier: {
            id: quartierId
          }
        },
        include: {
          ville: true,
          commune: true,
          prestation: true,
          quartier: true
        }
      });
      const cleanPrestataire = prestataires.map((prestataire) => new PrestataireDetailsVM({
        id: prestataire.id,
        nom: prestataire.nom,
        prenoms: prestataire.prenoms,
        genre: prestataire.genre,
        telephone: prestataire.telephone,
        ville: prestataire.ville.label,
        commune: prestataire.commune.label,
        quartier: prestataire.quartier.label,
        adresse: prestataire.adresse,
        aPayer: prestataire.aPayer,
        prestation: prestataire.prestation.label,
        dateCreation: prestataire.dateCreation
      }));
      return cleanPrestataire;
    } catch(e) {
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
          prestation: true,
          quartier: true
        }
      });
    }catch (e) {
      throw new HttpException('LOAD_DATA_ERROR', HttpStatus.FORBIDDEN);
    }
  }

  async findByPrestation(id: string) {
    const prestataires = await this.prisma.prestataire.findMany({
      where: {
        prestation: {
          id: id
        },
      },
      include: {
        ville: true,
        commune: true,
        prestation: true,
        quartier: true
      }
    });

    const cleanPrestataire = prestataires.map((prestataire) => new PrestataireDetailsVM({
      id: prestataire.id,
      nom: prestataire.nom,
      prenoms: prestataire.prenoms,
      genre: prestataire.genre,
      telephone: prestataire.telephone,
      ville: prestataire.ville.label,
      commune: prestataire.commune.label,
      quartier: prestataire.quartier.label,
      adresse: prestataire.adresse,
      aPayer: prestataire.aPayer,
      prestation: prestataire.prestation.label,
      dateCreation: prestataire.dateCreation
    }));
    return cleanPrestataire;
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
        // utilisateur: {
        //   connect: {
        //     id: updatePrestataireDto.utilisateur
        //   }
        // }
      }
    });
  }

  remove(id: string) {
    try {
      return this.prisma.prestataire.delete({ where: { id: id} });
    } catch(e) {
      throw new HttpException('DELETE_ERROR', HttpStatus.FORBIDDEN);
    }
  }
}
