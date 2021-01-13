import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../../../libs/material/src/lib/material.module';
import { WidgetsDetailsComponent } from './widgets-details/widgets-details.component';
import { WidgetsFormComponent } from './widgets-form/widgets-form.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets.component';
import { WidgetsService } from './services/widgets.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsDialogComponent } from './widgets-dialog/widgets-dialog.component';



@NgModule({
  declarations: [
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    WidgetsFormComponent,
    WidgetsDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    WidgetsComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    WidgetsFormComponent,
  ],
  entryComponents: [WidgetsDialogComponent],
  providers: [WidgetsService]
})
export class WidgetsModule { }
