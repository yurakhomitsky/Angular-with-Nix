import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit } from '@angular/core';
import { PrescriptionItemComponent } from '../prescription-item/prescription-item.component';

@Component({
  selector: 'prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriptionsListComponent implements OnInit {
  @Input() prescriptions: any[];
  @ContentChild(PrescriptionItemComponent) prescriptionItem: PrescriptionItemComponent;
  constructor() { }

  ngOnInit(): void {
  }
}
