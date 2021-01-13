import { Controller, Get } from '@nestjs/common';
import { PrescriptionsService } from './prescription.service';


@Controller('prescriptions')
export class PrescriptionsController {
  constructor(private prescriptionsService: PrescriptionsService) { }

  @Get()
  getPrescriptions() {
    return this.prescriptionsService.getPrescriptions();
  }
}
