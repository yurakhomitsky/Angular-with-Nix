import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Widget } from '@fem-production-angular/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {
  constructor(private http: HttpClient) {
    console.log('Service in Core data have been created');
  }

  create(widget: Partial<Widget>): Observable<Widget> {
    return this.http.post<Widget>('/api/widgets', widget);
  }

  update(widget: Widget, id: string): Observable<Widget> {
    return this.http.put<Widget>(`/api/widgets/${id}`, widget);
  }

  findAll(): Observable<Widget[]> {
    return this.http.get<Widget[]>('/api/widgets');
  }

  remove(id: string) {
    return this.http.delete(`/api/widgets/${id}`);
  }
}
