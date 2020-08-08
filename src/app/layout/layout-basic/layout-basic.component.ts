import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './layout-basic.component.html',
  styleUrls: ['./layout-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
