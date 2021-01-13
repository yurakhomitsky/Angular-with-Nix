import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { WidgetsState } from './widgets.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import * as WidgetsActions from './widgets.actions';
import { WidgetsService } from '../../../../core-data/src/lib/service/widgets/widgets.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Widget } from '@fem-production-angular/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class WidgetsFacadeService {

  @Select(WidgetsState.getWidgets)
  public widgets$: Observable<Widget[]>;

  @Select(WidgetsState.selectedWidget)
  public selectedWidget$: Observable<Widget>;

  constructor(private widgetsService: WidgetsService, private store: Store) { }


  @Dispatch()
  public findAll() {
    return this.store.dispatch(new WidgetsActions.FetchWidgets).pipe(
      switchMap(() => this.widgetsService.findAll().pipe(
        map(widgets => new WidgetsActions.FetchWidgetsSuccess(widgets)),
        catchError(({ message }) => {
          return of(new WidgetsActions.FetchWidgetsFailure(message));
        })
      ))
    );

  }

  @Dispatch()
  public createWidget(widget: Widget) {
    return this.widgetsService.create(widget).pipe(
      map(widget => new WidgetsActions.CreateWidget(widget))
    );
  }

  @Dispatch()
  public updateWidget(widget: Widget, id: string) {
    return this.widgetsService.update(widget, id).pipe(
      map(() => new WidgetsActions.UpdateWidget(widget, id))
    );;
  }

  @Dispatch()
  public selectWidget(widget: Widget | null) {
    return new WidgetsActions.SelectWidget(widget);
  }

  @Dispatch()
  public deleteWidget(id: string) {
    return this.widgetsService.remove(id).pipe(
      map(() => new WidgetsActions.DeleteWidget(id))
    );
  }

}
