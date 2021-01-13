import { Module } from '@nestjs/common';
import { PrescriptionsController } from './prescription.controller';
import { PrescriptionsService } from './prescription.service';

@Module({
  imports: [],
  controllers: [PrescriptionsController],
  providers: [PrescriptionsService],
})
export class PrescriptionModule { }
