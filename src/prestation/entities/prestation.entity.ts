import { ApiProperty } from "@nestjs/swagger";
import { Prestation } from "@prisma/client";
import { PrestataireEntity } from '../../prestataire/entities/prestataire.entity';

export class PrestationEntity implements Prestation{
    @ApiProperty()
    imageUrl: string;

    @ApiProperty()
    id: string;

    @ApiProperty()
    label: string;

    @ApiProperty()
    prestataires: Array<PrestataireEntity>;
}
