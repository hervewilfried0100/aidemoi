import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCommuneDto {
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(5)
  label: string;

  @ApiProperty()
  ville: string;
}
