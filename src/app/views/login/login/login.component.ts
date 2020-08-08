import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {

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
    // this.authExternService.login(this.loginForm.value).subscribe(
    //   logged => {
    //     this.goToHome();
    //   },
    //   error => {
    //     this.setWrongCredentialsError();
    //   }

    // );
  }

  /**
   * Method to init form
   */
  private initForm(): FormGroup {

    return new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  /**
   * This function is used to redirect the user's logged to the dashboard
   */
  private goToHome(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * This function is used to set the wrong credentials error
   */
  private setWrongCredentialsError(): void {
    this.loginForm.setErrors({ 'wrong-credentials': true });
  }

}
