import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faBell, faList, faFileAlt, faRocket, faWrench, faCog, faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LayoutDashboardService } from 'src/app/layout/layout-dashboard/layout-dashboard.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {

  /**
   * Icons
   */
  faBell = faBell;
  faList = faList;
  faFileAlt = faFileAlt;
  faRocket = faRocket;
  faWrench = faWrench;
  faCog = faCog;
  faHome = faHome;

  constructor(
    public authenticationService: AuthenticationService,
    public layoutDashboardService: LayoutDashboardService
  ) { }

  ngOnInit() {
  }

}
