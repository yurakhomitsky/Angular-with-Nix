import { Component, OnInit } from '@angular/core';
import { PrescriptionsService } from '../../../../../libs/medicometion/src/lib/prescriptions/services/prescriptions.service';
import { forkJoin, Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'fem-production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private prescriptionService: PrescriptionsService) { }
  public prescriptions: Observable<any[]>;

  ngOnInit(): void {
    this.prescriptions = this.prescriptionService.findAll().pipe(tap(console.log));
  }

}
