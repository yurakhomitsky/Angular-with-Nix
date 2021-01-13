import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '../../../../../../libs/api-interfaces/src/lib/api-interfaces';

@Component({
  selector: 'fem-production-angular-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() delete = new EventEmitter<Widget>();
  @Output() selected = new EventEmitter<Widget>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(widget: Widget): void {
    this.selected.emit(widget);
  }

  public onDelete(widget: Widget): void {
    this.delete.emit(widget);
  }
}
