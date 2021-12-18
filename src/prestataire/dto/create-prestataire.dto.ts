import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { GenreEnums } from '../entities/prestataire.entity';

export class CreatePrestataireDto {
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  nom: string;

  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(3)
  prenoms: string;

  @IsNotEmpty()
  @ApiProperty()
  genre: GenreEnums;

  @IsNotEmpty()
  @ApiProperty()
  telephone: string;

  @IsNotEmpty()
  @ApiProperty()
  ville: string;

  @IsNotEmpty()
  @ApiProperty()
  commune: string;

  @IsNotEmpty()
  @ApiProperty()
  quartier: string;

  @IsNotEmpty()
  @ApiProperty()
  adresse: string;

  @ApiProperty({ required: false, default: false })
  aPayer?: boolean = false;

  @ApiProperty()
  prestation: string;

  @ApiProperty()
  utilisateur: string;

  @ApiProperty()
  dateCreation?: Date;
}
