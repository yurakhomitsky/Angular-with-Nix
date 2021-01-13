import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/src/lib/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class UiToolbarModule { }
