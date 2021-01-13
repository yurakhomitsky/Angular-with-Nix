import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from '@fem-production-angular/api-interfaces';

@Injectable()
export class WidgetsService {
  constructor(private http: HttpClient) {
    console.log('Simple was created');
  }

  create(widget: Partial<Widget>): Observable<Widget> {
    return this.http.post<Widget>('/api/widgets', widget);
  }

  findAll(): Observable<Widget[]> {
    return this.http.get<Widget[]>('/api/widgets');
  }

  remove(id: number) {
    return this.http.delete(`/api/widgets${id}`);
  }
}
