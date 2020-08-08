import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { USER } from './authentication-service.mock';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable()
export class AuthenticationServiceMock extends AuthenticationService {

  user$ = of(USER);

  setUser() {

  }

  userCan(): Observable<boolean> {
    return of(true);
  }
}
