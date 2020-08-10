import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpRequestsService } from './http-requests.service';

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
      { provide: AuthenticationService, useClass: AuthenticationServiceMock }
    ]
  }));

  it('should be created', () => {
    const service: HttpRequestsService = TestBed.inject(HttpRequestsService);
    expect(service).toBeTruthy();
  });
});
