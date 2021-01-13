import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsService } from './service/widgets/widgets.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [WidgetsService]
})
export class CoreDataModule { }
