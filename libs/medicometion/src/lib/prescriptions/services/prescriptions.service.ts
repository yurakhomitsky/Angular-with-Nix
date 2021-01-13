import { Injectable } from '@angular/core';
import { PrescriptionsModule } from '../prescriptions.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: PrescriptionsModule
})
export class PrescriptionsService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>('/api/prescriptions');
  }
}
