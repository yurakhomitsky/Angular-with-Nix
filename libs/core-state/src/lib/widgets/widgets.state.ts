import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Widget } from '../../../../api-interfaces/src/lib/api-interfaces';
import * as WidgetsActions from './widgets.actions';

export interface WidgetsStateModel {
  widgets: Widget[];
  selectedWidget: Widget;
  error: string;
  loading: boolean;
}

@State<WidgetsStateModel>({
  name: 'widgets',
  defaults: {
    widgets: [],
    selectedWidget: null,
    error: '',
    loading: false
  }
})
export class WidgetsState {
  @Selector()
  public static getWidgets(state: WidgetsStateModel): Widget[] {
    return state.widgets;
  }

  @Selector()
  public static selectedWidget(state: WidgetsStateModel): Widget {
    return state.selectedWidget;
  }

  @Action(WidgetsActions.FetchWidgets)
  private fetchWigets(ctx: StateContext<WidgetsStateModel>) {
    ctx.patchState({
      loading: true,
    });
  }

  @Action(WidgetsActions.FetchWidgetsSuccess)
  private fetchWigetsSuccess(ctx: StateContext<WidgetsStateModel>, { widgets }: WidgetsActions.FetchWidgetsSuccess) {
    ctx.patchState({
      widgets,
      loading: false
    });
  }

  @Action(WidgetsActions.FetchWidgetsFailure)
  private fetchWigetsFailure(ctx: StateContext<WidgetsStateModel>, { error }: WidgetsActions.FetchWidgetsFailure) {
    ctx.patchState({
      error,
      loading: false
    });
  }

  @Action(WidgetsActions.CreateWidget)
  private createWidget(ctx: StateContext<WidgetsStateModel>, { widget }: WidgetsActions.CreateWidget) {
    const widgetsState = ctx.getState().widgets;
    ctx.patchState({
      widgets: [...widgetsState, widget]
    });
  }

  @Action(WidgetsActions.UpdateWidget)
  private updateWidget(ctx: StateContext<WidgetsStateModel>, { widget, id }: WidgetsActions.UpdateWidget) {
    const widgetsState = ctx.getState().widgets;
    for (let i = 0; i < widgetsState.length; i++) {
      if (widgetsState[i].id === id) {
        widgetsState[i] = {
          ...widget
        };
        break;
      }
    }
    ctx.patchState({
      widgets: widgetsState
    });
  }

  @Action(WidgetsActions.SelectWidget)
  private selectedWidget(ctx: StateContext<WidgetsStateModel>, { widget }: WidgetsActions.SelectWidget) {
    ctx.patchState({
      selectedWidget: widget
    });
  }

  @Action(WidgetsActions.DeleteWidget)
  private deleteWidget(ctx: StateContext<WidgetsStateModel>, { id }: WidgetsActions.DeleteWidget) {
    const filtered = ctx.getState().widgets.filter(widget => widget.id !== id);
    ctx.patchState({
      widgets: filtered
    });
  }
}
