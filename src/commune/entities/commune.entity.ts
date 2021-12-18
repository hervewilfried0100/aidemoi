import { Commune } from "@prisma/client";
import { ApiProperty } from '@nestjs/swagger';
import { PrestataireEntity } from '../../prestataire/entities/prestataire.entity';
import { QuartierEntity } from '../../quartier/entities/quartier.entity';

export class CommuneEntity implements Commune{
  @ApiProperty()
  id: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  quartiers: Array<QuartierEntity>;

  @ApiProperty()
  prestataires: Array<PrestataireEntity>;

  @ApiProperty()
  villeId: string;
}
