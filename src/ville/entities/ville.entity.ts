import { ApiProperty } from "@nestjs/swagger";
import { CommuneEntity } from "src/commune/entities/commune.entity";
import { PrestataireEntity } from "src/prestataire/entities/prestataire.entity";

export class VilleEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  communes?: Array<CommuneEntity>;

  @ApiProperty()
  prestataires?: Array<PrestataireEntity>;
}
