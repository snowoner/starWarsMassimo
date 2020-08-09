import { TestBed, async, inject } from '@angular/core/testing';

import { NavigationGuard } from './navigation.guard';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationServiceMock } from 'src/assets/mocks/authentication/authentication-service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { KeycloakService } from 'keycloak-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavigationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        NavigationGuard,
        { provide: AuthenticationService, useClass: AuthenticationServiceMock },
        RouterTestingModule,
        KeycloakService
      ]
    });
  });

  it('should ...', inject([NavigationGuard], (guard: NavigationGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should call canActivate with user and permission', inject([NavigationGuard, AuthenticationService],
    (guard: NavigationGuard, authenticationService: AuthenticationService) => {
      spyOn(authenticationService, 'userCan')
        .and
        .returnValue(of(true));
      guard.canActivate({ data: { roles: ['ROLE_ADMIN'] } } as any, {} as any).subscribe(result => {
        expect(result).toBeTruthy();
      });
    }));

  it('should call canActivate with user and without permission', inject([NavigationGuard,
    AuthenticationService, Router], (guard: NavigationGuard, authenticationService: AuthenticationService, router: Router) => {
      spyOn(authenticationService, 'userCan')
        .and
        .returnValue(of(false));
      const spyRouter = spyOn(router, 'navigate');
      guard.canActivate({ data: { roles: ['USER'] } } as any, {} as any).subscribe(result => {
        expect(result).toBeTruthy();
        expect(spyRouter).toHaveBeenCalledWith(['/home']);
      });
    }));

});
