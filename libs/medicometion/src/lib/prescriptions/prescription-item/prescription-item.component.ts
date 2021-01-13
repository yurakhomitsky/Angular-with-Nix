import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prescription-item',
  templateUrl: './prescription-item.component.html',
  styleUrls: ['./prescription-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriptionItemComponent implements OnInit {
  panelOpenState = false;
  @Input() prescription: any;
  constructor() { }

  ngOnInit(): void {
  }

}
