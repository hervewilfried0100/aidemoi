import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(8)
  @ApiProperty()
  telephone: string;

  @IsNotEmpty()
  @ApiProperty()
  motdepasse: string;

  @ApiProperty()
  motdepasseConfirmation: string;

  @ApiProperty({ required: false })
  prestataire: string;
}
