import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Widget } from '../../../../../../libs/api-interfaces/src/lib/api-interfaces';

@Component({
  selector: 'fem-production-angular-widgets-form',
  templateUrl: './widgets-form.component.html',
  styleUrls: ['./widgets-form.component.scss']
})
export class WidgetsFormComponent implements OnInit, OnChanges {
  @Input() widget: Widget = null;

  @Output() create: EventEmitter<Widget> = new EventEmitter<Widget>();
  @Output() update: EventEmitter<Widget> = new EventEmitter<Widget>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public exists = false;
  constructor(private fb: FormBuilder) {
    this.form = this.initForm();
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.widget && this.widget.title && this.form) {
      this.exists = true;
      const value = this.widget;
      this.form.patchValue(value);

    }
  }

  public createWidget(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  public updateWidget(): void {
    if (this.form.valid) {
      const widget = {
        ...this.widget,
        ...this.form.value
      };
      this.create.emit(widget);
    }
  }
  public cancelWidget(): void {
    this.cancel.emit();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }
}
