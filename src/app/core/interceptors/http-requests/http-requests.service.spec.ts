import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpRequestsService } from './http-requests.service';
import { KeycloakService } from 'keycloak-angular';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { of } from 'rxjs';
import { AuthenticationServiceMock } from 'src/assets/mocks/authentication/authentication-service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],
    providers: [
      KeycloakService,
      { provide: AuthenticationService, useClass: AuthenticationServiceMock }
    ]
  }));

  it('should be created', () => {
    const service: HttpRequestsService = TestBed.inject(HttpRequestsService);
    expect(service).toBeTruthy();
  });
  it('should be created with explcluded url', inject([HttpRequestsService], (service: HttpRequestsService) => {
    service.intercept({
      clone: () => { }, url: 'test', headers: {
        keys: () => [], has: () => true,
        append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => { });
  }));
  it('should be created withouth explcluded url', inject([HttpRequestsService, AuthenticationService],
    (service: HttpRequestsService, authenticationService: AuthenticationService) => {
      spyOn(authenticationService, 'getTokens')
        .and
        .returnValue(of({ ssoToken: 'test', amToken: 'test' }));
      service.intercept({
        clone: () => { }, url: 'test', headers: {
          keys: () => [], has: () => true,
          append: () => 'test'
        }
      } as any, { handle: () => of('test') } as any).subscribe(result => { });
    }));
});
