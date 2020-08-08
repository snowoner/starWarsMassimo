import { Injectable } from '@angular/core';
import { Observable, from, of, BehaviorSubject } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

const UNAUTHORIZED_MESSAGE = 'El usuario no existe. Solicite alta en el sistema.';
const AUTH_EXTERN_TOKEN_STORAGE = 'USER-JWT';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * Logged user on application
   */
  private user: BehaviorSubject<User> = new BehaviorSubject(null);
  public user$ = this.user.asObservable();

  constructor(
    private router: Router
  ) { }

  /**
   * Set logged user
   * @param user user data
   */
  setUser(user: User) {
    this.user.next(user);
  }

  /**
   * Get logged in User
   */
  getLoggedInUser(): Observable<any> {
    return of(localStorage.getItem(AUTH_EXTERN_TOKEN_STORAGE));
  }

  /**
   * Logout the user
   */
  logout(): void {
    localStorage.removeItem(AUTH_EXTERN_TOKEN_STORAGE);
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  /**
   * Determinates if user can do action or not
   * @param hasPrivilege Privilege to analize
   */
  userCan(hasRoles: string[]): Observable<boolean> {
    return of(true);
    return this.user$
      .pipe(map(user => {
        if (!user) { return false; }
        return hasRoles.some(analizeRole => analizeRole === user.role.code);
      })
      );
  }

  /**
   * Verify that the user is authenticated
   */
  isAuthenticated(): Observable<boolean> {
    return from(this.getLoggedInUser()
      .pipe(
        concatMap((user) => {
          if (user) {
            return of(true);
          } else {
            this.setUnAutorizedUser();
            return of(false);
          }
        })
      ));
  }

  /**
   * Redirect user to unauthorized view and show the corresponding error
   */
  private setUnAutorizedUser() {
    this.router.navigate([`error/${UNAUTHORIZED_MESSAGE}/authorization`]);
  }

}
