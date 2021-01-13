import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Widget } from '../../../../../libs/api-interfaces/src/lib/api-interfaces';
import { WidgetsDialogComponent } from './widgets-dialog/widgets-dialog.component';
import { WidgetsFacadeService } from '../../../../../libs/core-state/src/lib/widgets/widgets-facade.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'fem-production-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  public widgets$: Observable<Widget[]>;
  public selectedWidget$: Observable<Widget>;

  constructor(private widgetsFacadeService: WidgetsFacadeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initValues();
    this.findAll();
    this.selectedWidget$.pipe(
      filter(Boolean)
    ).subscribe(this.openWidgetDialog.bind(this));
  }

  public openWidgetDialog(widget?: Widget) {
    const dialogAction = widget ? 'update' : 'create';
    console.log(widget, dialogAction);
    const subscription = this.openDialog(widget).afterClosed()
      .subscribe((widgetFromDialog: Widget | null) => {

        if (widgetFromDialog) {
          if (dialogAction === 'update') {
            this.updateWidget(widgetFromDialog);
          }
          if (dialogAction === 'create') {
            this.createWidget(widgetFromDialog);
          }
        }
        subscription.unsubscribe();
        this.onSelected(null);
      });
  }

  public createWidget(widget: Widget): void {
    this.widgetsFacadeService.createWidget(widget);
  }

  public updateWidget(widget: Widget): void {
    this.widgetsFacadeService.updateWidget(widget, widget.id);
  }

  public onSelected(widget: Widget | null): void {
    this.widgetsFacadeService.selectWidget(widget);
  }

  public onDelete(widget: Widget): void {
    this.widgetsFacadeService.deleteWidget(widget.id);
  }

  private openDialog(widget?: Widget) {
    const dialogRef = this.dialog.open(WidgetsDialogComponent, {
      width: '400px',
      data: widget,
    });
    return dialogRef;
  }

  private findAll(): void {
    this.widgetsFacadeService.findAll();
  }

  private initValues(): void {
    this.widgets$ = this.widgetsFacadeService.widgets$;
    this.selectedWidget$ = this.widgetsFacadeService.selectedWidget$;
  }
}
