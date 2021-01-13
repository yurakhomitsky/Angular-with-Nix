import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Widget } from '../../../../../../libs/api-interfaces/src/lib/api-interfaces';

@Component({
  selector: 'fem-production-angular-widgets-dialog',
  templateUrl: './widgets-dialog.component.html',
  styleUrls: ['./widgets-dialog.component.scss']
})
export class WidgetsDialogComponent implements OnInit {
  public widget: Widget = null;
  constructor(
    public dialogRef: MatDialogRef<WidgetsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Widget) { }

  ngOnInit(): void {
    this.widget = this.data;
  }

  public onCreate(widget: Widget): void {
    this.dialogRef.close(widget);
  }

  public onUpdate(widget: Widget): void {
    this.dialogRef.close(widget);
  }

  public onCancel(event): void {
    this.dialogRef.close();
  }
}
