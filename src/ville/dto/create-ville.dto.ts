import { ApiProperty } from '@nestjs/swagger';

export class CreateVilleDto {
  @ApiProperty()
  label: string;

  @ApiProperty({ required: false })
  communes?: Array<string>;

  @ApiProperty({required: false})
  prestataires?: Array<string>;
}
