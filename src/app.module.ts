import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrestataireModule } from './prestataire/prestataire.module';
import { VilleModule } from './ville/ville.module';
import { QuartierModule } from './quartier/quartier.module';
import { PrestationModule } from './prestation/prestation.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { CommuneModule } from './commune/commune.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    PrestataireModule,
    VilleModule,
    QuartierModule,
    PrestationModule,
    CommuneModule,
    PrismaModule,
    UsersModule,
    MulterModule.register({
      dest: './files'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
