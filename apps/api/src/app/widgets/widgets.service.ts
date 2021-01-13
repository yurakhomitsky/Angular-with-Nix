import { Widget } from '@fem-production-angular/api-interfaces';
import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { v4 as uuidv4 } from 'uuid';
import { plainToClass } from 'class-transformer';
import { Widget as WidgetClass } from './entities/widget.entity';
@Injectable()
export class WidgetsService {

  public widgets: Widget[] = [
    { id: '1', title: 'Widget 1', description: ' desc' },
    { id: '2', title: 'Widget 2', description: ' desc' },
    { id: '3', title: 'Widget 3', description: ' desc' }
  ];

  create(createWidgetDto: CreateWidgetDto) {
    const newWidget: Widget = {
      id: uuidv4(),
      ...createWidgetDto,
    };
    this.widgets = [...this.widgets, newWidget];
    return newWidget;
  }

  findAll() {
    return this.widgets;
  }

  findOne(id: string) {
    return this.widgets.find((widget) => widget.id === id);
  }

  update(id: string, updateWidgetDto: UpdateWidgetDto) {
    const widget = plainToClass(WidgetClass, updateWidgetDto);

    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i].id === id) {
        this.widgets[i] = {
          ...widget
        };
        break;
      }
    }
    return widget;
  }

  remove(id: string) {
    return this.widgets = this.widgets.filter((widget) => widget.id !== id);
  }
}
