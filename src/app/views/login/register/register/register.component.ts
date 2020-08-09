import { Component, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/core/animations/animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/core/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: appAnimations
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
  ) { }

  /**
   * Contains registration form
   */
  registerUserForm: FormGroup;

  ngOnInit(): void {
    this.registerUserForm = this.initForm();
  }

  /**
   * This function is used to redirect the user's logged to the login
   */
  public goToLoginPage(): void {
    this.router.navigate(['login']);
  }

  /**
   * This function is used to register the user
   */
  public login(): void {
    if (this.registerUserForm.valid) {
        const newUser: User = {
          id: null,
          userName: this.registerUserForm.get('userName').value,
          password: this.registerUserForm.get('password').value,
        };
        this.authenticationService.createNewUser(newUser).subscribe(result => {
          if (result) {
              this.authenticationService.setUser(newUser);
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
  }

  /**
   * Method to init form
   */
  private initForm(): FormGroup {

    return this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
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
    this.registerUserForm.setErrors({ 'wrong-credentials': true });
  }

}
