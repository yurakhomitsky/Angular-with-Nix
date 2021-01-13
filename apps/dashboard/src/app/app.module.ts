import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@fem-production-angular/core-data';
import { CoreStateModule } from '@fem-production-angular/core-state';
import { MaterialModule } from '@fem-production-angular/material';
import { UiToolbarModule } from '@fem-production-angular/ui-toolbar';
import { MedicometionModule } from '../../../../libs/medicometion/src/lib/medicometion.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { WidgetsModule } from './widgets/widgets.module';
import { WidgetsDialogComponent } from './widgets/widgets-dialog/widgets-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule,
    MedicometionModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
