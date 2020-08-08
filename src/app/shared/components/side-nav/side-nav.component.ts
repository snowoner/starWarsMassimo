import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SideNavService } from '../../../services/side-nav/side-nav.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { faHome, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {


  faHome = faHome;
  faRocket = faRocket;
  /**
   *
   * @param sideNavService Inject sideNavService to handle sideNav state and mode
   * @param authenticationService Inject
   */
  constructor(
    public sideNavService: SideNavService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
