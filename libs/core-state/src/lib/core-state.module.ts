import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { WidgetsState } from './widgets/widgets.state';
import { environment } from '../../../../apps/dashboard/src/environments/environment.prod';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CoreDataModule } from '../../../core-data/src/lib/core-data.module';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    NgxsModule.forRoot([WidgetsState], {
      developmentMode: !environment.production
    }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
  ],
})
export class CoreStateModule { }
