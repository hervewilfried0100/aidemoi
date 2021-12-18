import { Module } from '@nestjs/common';
import { PrestationService } from './prestation.service';
import { PrestationController } from './prestation.controller';

@Module({
  controllers: [PrestationController],
  providers: [PrestationService]
})
export class PrestationModule {}
