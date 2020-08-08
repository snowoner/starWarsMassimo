import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAuthorizationComponent } from './error-authorization.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AuthenticationServiceMock } from 'src/assets/mocks/authentication/authentication-service';


describe('ErrorAuthorizationComponent', () => {
  let component: ErrorAuthorizationComponent;
  let fixture: ComponentFixture<ErrorAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorAuthorizationComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: AuthenticationService, useClass: AuthenticationServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call logout', () => {
    const authenticationService = TestBed.inject(AuthenticationService);
    const authenticationServiceSpyon = spyOn(authenticationService, 'logout');
    component.logout();
    expect(authenticationServiceSpyon).toHaveBeenCalled();
  });
});
