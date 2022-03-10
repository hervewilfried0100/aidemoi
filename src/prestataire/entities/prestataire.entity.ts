import { ApiProperty } from "@nestjs/swagger";
import { Prestataire } from "@prisma/client";
import { CommuneEntity } from "src/commune/entities/commune.entity";
import { PrestationEntity } from "src/prestation/entities/prestation.entity";
import { VilleEntity } from "src/ville/entities/ville.entity";
import { LatLngEntity } from './localisation.entity';

export class PrestataireEntity implements Prestataire{

  @ApiProperty()
  id: string;

  @ApiProperty()
  nom: string;

  @ApiProperty()
  prenoms: string;

  @ApiProperty()
  genre: GenreEnums;

  @ApiProperty()
  telephone: string;

  @ApiProperty()
  ville: VilleEntity;

  @ApiProperty()
  villeId: string;

  @ApiProperty()
  commune: CommuneEntity

  @ApiProperty()
  communeId: string;

  @ApiProperty()
  quartier: string;

  @ApiProperty()
  quartierId: string;

  @ApiProperty({ required: false })
  dateCreation: Date;

  @ApiProperty()
  adresse: string;

  @ApiProperty()
  aPayer: boolean;

  @ApiProperty()
  prestation: PrestationEntity;

  @ApiProperty()
  prestationId: string;

  @ApiProperty()
  localisation: LatLngEntity;

  @ApiProperty()
  localisationId: string;
}

export enum GenreEnums {
  MASCULIN = 'MASCULIN',
  FEMININ = 'FEMININ'
}
