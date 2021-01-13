import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionModule } from './prescription/prescription.module';
import { WidgetsModule } from './widgets/widgets.module';

@Module({
  imports: [PrescriptionModule, WidgetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
