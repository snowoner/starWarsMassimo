import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SideNavService } from 'src/app/services/side-nav/side-nav.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {

  constructor(
    public sideNavService: SideNavService,
    public authenticationService: AuthenticationService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
}
