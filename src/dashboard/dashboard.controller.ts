import { Controller, Get} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('api/v1/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/total-prestataire')
  recupererPrestataireTotal() {
    return this.dashboardService.recupererTotalPrestataire();
  }

  @Get('total-prestataire-payer')
  recupererPrestataireTotalPayer() {
    return this.dashboardService.recupererTotalPrestatairePayer();
  }

  @Get('total-prestataire-non-payer')
  recupererPrestataireTotalNonPayer() {
    return this.dashboardService.recupererTotalPrestataireNonPayer();
  }
}
