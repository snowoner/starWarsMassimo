import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { KeycloakService } from 'keycloak-angular';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpServiceStub;
  beforeEach(() => {
    httpServiceStub = {
      post: () => of({ access_token: 'test' }),
      get: () => of({})
    };
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        KeycloakService,

        { provide: HttpClient, useValue: httpServiceStub }
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call setUser set user params recibed', () => {
    service.setUser({ id: '1', name: 'test', role: { code: 'ROLE_ADMIN', id: '1', description: 'Administrador' } } as any);
    service.user$.subscribe(user => {
      expect(user.name).toBe('test');
    });
  });
  it('should call userCan with permission', () => {
    service.setUser({ id: '1', name: 'test', role: { code: 'ROLE_ADMIN', id: '1', description: 'Administrador' } } as any);
    service.userCan(['ROLE_GUEST']).subscribe(can => {
      expect(can).toBeFalsy();
    });
  });
  it('should call userCan without user', () => {
    service.setUser(null);
    service.userCan(['ROLE_ADMIN']).subscribe(can => {
      expect(can).toBeFalsy();
    });
  });
  it('should call SSOlogout', () => {
    const keycloakService = TestBed.inject(KeycloakService);
    (keycloakService as any)['_instance'] = {
      authServerUrl: 'http://localhost/auth',
      realm: 'test'
    };
    spyOn(service, 'SSOlogout');
    service.SSOlogout();
    expect(service.SSOlogout).toHaveBeenCalled();
  });
  it('getAMToken to get valid token', () => {
    service.cachedAmExpired = 99999999999999999999999;
    service.cachedAmToken = 'test';
    service.getAMToken().subscribe(data => {
      expect(data.access_token).toEqual('test');
    });
  });
  it('getAMToken to get valid token wih pendingTokenRequest', () => {
    service.pendingTokenRequest = of({ access_token: 'test' });
    service.getAMToken().subscribe(data => {
      expect(data.access_token).toBe('test');
    });
  });
  it('should get am and sso token with invalid am token', () => {
    const keycloakService = TestBed.inject(KeycloakService);
    spyOn(keycloakService, 'getToken')
      .and
      .returnValue(of('test').toPromise());
    service.getTokens().subscribe(tokens => {
      expect(tokens.amToken).toBeDefined();
      expect(tokens.ssoToken).toBeDefined();
    });
  });
  it('should call isAuthenticated and get valid authorized', () => {
    const keycloakService = TestBed.inject(KeycloakService);
    service.cachedAmExpired = 9999999999999;
    service.cachedAmToken = 'test';
    spyOn(keycloakService, 'getToken')
      .and
      .returnValue(of('test').toPromise());
    service.isAuthenticated().subscribe(authorized => {
      expect(authorized).toBeTruthy();
    });
  });
  it('should call isAuthenticated and get unathorized', () => {
    const keycloakService = TestBed.inject(KeycloakService);
    service.cachedAmExpired = 9999999999999;
    spyOn(keycloakService, 'getToken')
      .and
      .returnValue(of(null).toPromise());
    service.isAuthenticated().subscribe(authorized => {
      expect(authorized).toBeFalsy();
    });
  });
  it('should call isAuthenticated and get authorized', () => {
    const keycloakService = TestBed.inject(KeycloakService);
    service.cachedAmExpired = 9999999999999;
    spyOn(keycloakService, 'getToken')
      .and
      .returnValue(of('test').toPromise());
    service.isAuthenticated().subscribe(authorized => { });
    service.isAuthenticated().subscribe(authorized => {
      expect(authorized).toBeTruthy();
    });
  });
  it('should call isAuthenticated and get unauthorized because not user', () => {
    const keycloakService = TestBed.inject(KeycloakService);
    const httpClient = TestBed.inject(HttpClient);
    service.cachedAmExpired = 9999999999999;
    spyOn(keycloakService, 'getToken')
      .and
      .returnValue(of('test').toPromise());

    spyOn(httpClient, 'get')
      .and
      .returnValue(of(null));
    service.isAuthenticated().subscribe(authorized => {

    });
  });
});
