import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { SideNavService } from 'src/app/services/side-nav/side-nav.service';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutDashboardComponent implements OnInit {
  /**
   *
   */
  constructor(
    private sideNavService: SideNavService
  ) { }

  ngOnInit(): void {
    this.checkSize();
  }

  /**
   * Event dispatched when window is resized
   */
  @HostListener('window:resize') changeView(): void {
    this.checkSize();
  }

  /**
   * Analize the window width to handle sidenav visibility mode
   */
  private checkSize(): void {
    if (window.innerWidth < 992) {
      this.sideNavService.setMode('over');
      this.sideNavService.close();
    } else {
      this.sideNavService.setMode('side');
      this.sideNavService.open();
    }
  }

}
