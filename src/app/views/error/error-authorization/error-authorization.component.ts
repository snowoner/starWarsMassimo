import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-error-authorization',
  templateUrl: './error-authorization.component.html',
  styleUrls: ['./error-authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorAuthorizationComponent implements OnInit {
  /**
   * Error to show on component view
   */
  error: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.error = params.error;
    });
  }

  /**
   * Close user session
   */
  logout() {
    this.authenticationService.logout();
  }


}
