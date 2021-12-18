import { Module } from '@nestjs/common';
import { PrestataireService } from './prestataire.service';
import { PrestataireController } from './prestataire.controller';

@Module({
  controllers: [PrestataireController],
  providers: [PrestataireService]
})
export class PrestataireModule {}
