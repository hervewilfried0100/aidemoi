import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TotalPrestatairesVM } from './vm/dashboard-vm';

@Injectable()
export class DashboardService {

  constructor(private prismaService: PrismaService){}

  async recupererTotalPrestataire(): Promise<TotalPrestatairesVM> {
    const prestatairesNbre = await this.prismaService.prestataire.count();
    return new TotalPrestatairesVM({ nombrePrestataires: prestatairesNbre });
  }

  async recupererTotalPrestatairePayer(): Promise<TotalPrestatairesVM> {
    const prestataireNbre = await this.prismaService.prestataire.count({  where: { aPayer: true } });
    return new TotalPrestatairesVM({ nombrePrestataires: prestataireNbre })
  }

  async recupererTotalPrestataireNonPayer(): Promise<TotalPrestatairesVM> {
    const prestataire = await this.prismaService.prestataire.count({ where: { aPayer: false } });
    return new TotalPrestatairesVM({ nombrePrestataires: prestataire });
  }

  async recupererTotalPrestation(){
    const prestations = await this.prismaService.prestation.count();
    return { totalPrestations: prestations };
  }
}
