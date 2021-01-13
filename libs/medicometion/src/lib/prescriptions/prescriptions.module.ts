import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionsListComponent } from './prescriptions-list/prescriptions-list.component';
import { PrescriptionItemComponent } from './prescription-item/prescription-item.component';
import { MaterialModule } from '../../../../material/src/lib/material.module';

@NgModule({
  declarations: [PrescriptionsListComponent, PrescriptionItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PrescriptionsListComponent, PrescriptionItemComponent],
  providers: [],
})
export class PrescriptionsModule { }
