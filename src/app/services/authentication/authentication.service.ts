import { Injectable } from '@angular/core';
import { Observable, from, of, BehaviorSubject } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

const UNAUTHORIZED_MESSAGE = 'El usuario no existe. Solicite alta en el sistema.';
const AUTH_EXTERN_TOKEN_STORAGE = 'USER-JWT';
const AUTH_EXTERN_USERS = 'REGISTERED_USERS';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * Logged user on application
   */
  private user: BehaviorSubject<User> = new BehaviorSubject(null);
  public user$ = this.user.asObservable();

  public registeredUsers: BehaviorSubject<User[]> = new BehaviorSubject(null);
  public registeredUsers$ = this.registeredUsers.asObservable();


  constructor(
    private router: Router
  ) { 
    this.loadRegisteredUsers();
  }

  loadRegisteredUsers(): void{
    const availableUsers = JSON.parse(localStorage.getItem(AUTH_EXTERN_USERS));
    if (availableUsers) {
      this.registeredUsers.next(availableUsers);
    }
  }

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
  }

  /**
   * Verify that the user is authenticated
   */
  isAuthenticated(): Observable<boolean> {
    return from(this.getLoggedInUser()
      .pipe(
        concatMap((user) => {
          if (user) {
            this.setUser(user);
            return of(true);
          } else {
            this.setUnAutorizedUser();
            return of(false);
          }
        })
      ));
  }

  login(userLogin: any): Observable<boolean> {
    return this.getLoggedInUser()
    .pipe(map(user => {
      if (user) {
        this.router.navigate(['/starships']);
        return true;
      } else {
        console.log('UserLogin', userLogin);
        const currentUser =
          this.registeredUsers.getValue()?.find(x =>
            x.userName === userLogin.userName && x.password === userLogin.password);
        if (currentUser) {
          localStorage.setItem(AUTH_EXTERN_TOKEN_STORAGE, JSON.stringify(currentUser));
          return true;
        }
      }
      return false;
    }));
  }

  userExists(user: User): boolean {
    const foundUser = this.registeredUsers.getValue()?.find(x => x.userName === user.userName);
    if (foundUser) {
      return true;
    } else {
      return false;
    }
  }

  createNewUser(user: User): Observable<boolean> {
    if (!this.userExists(user)) {
      localStorage.setItem(AUTH_EXTERN_TOKEN_STORAGE, JSON.stringify(user));
      let availableUsers = this.registeredUsers.getValue();
      if (availableUsers === null) {
        availableUsers = [];
      }
      availableUsers.push(user);
      localStorage.setItem(AUTH_EXTERN_USERS, JSON.stringify(availableUsers));
      this.registeredUsers.next(availableUsers);
      return of(true);
    }
    return of(false);
  }

  /**
   * Redirect user to unauthorized view and show the corresponding error
   */
  private setUnAutorizedUser(): void {
    this.router.navigate([`error/${UNAUTHORIZED_MESSAGE}/authorization`]);
  }

}
