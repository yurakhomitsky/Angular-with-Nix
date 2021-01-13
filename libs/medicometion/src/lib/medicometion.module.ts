import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';

@NgModule({
  imports: [CommonModule, PrescriptionsModule],
  exports: [PrescriptionsModule],
  declarations: [],
})
export class MedicometionModule { }
