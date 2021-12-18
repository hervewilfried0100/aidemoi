import { Module } from '@nestjs/common';
import { CommuneService } from './commune.service';
import { CommuneController } from './commune.controller';

@Module({
  controllers: [CommuneController],
  providers: [CommuneService],
})
export class CommuneModule {}
