import { Quartier } from ".prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class QuartierEntity implements Quartier {
  @ApiProperty()
  id: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  commune: string;

  @ApiProperty()
  communeId: string;
}
