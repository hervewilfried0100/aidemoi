import { ApiProperty } from "@nestjs/swagger";

export class CreateQuartierDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  commune: string;
}
