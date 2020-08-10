import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { appAnimations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: appAnimations
})
export class LoginComponent implements OnInit {

  /**
   * Contains login form
   */
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.initForm();
  }

  /**
   * This is method is used to login the user entered
   */
  login(): void {
    this.authenticationService.login(this.loginForm.value).subscribe(logged => {
      if (logged) {
        this.goToHome();
      } else {
        this.setWrongCredentialsError();
      }
    },
      error => {
        this.setWrongCredentialsError();
      }

    );
  }

  /**
   * Method to init form
   */
  private initForm(): FormGroup {

    return new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  /**
   * This function is used to redirect the user's logged to the dashboard
   */
  private goToHome(): void {
    this.router.navigate(['ships']);
  }

  /**
   * This function is used to set the wrong credentials error
   */
  private setWrongCredentialsError(): void {
    this.loginForm.setErrors({ 'wrong-credentials': true });
  }

  signUp(): void {
    this.router.navigate(['/login/register']);
  }


}
