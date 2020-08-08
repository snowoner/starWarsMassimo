import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { DataService } from '../data-service/data-service.service';
import { MenuOption } from 'src/app/core/models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  /**
   * Contains the menu options to show on DOM
   */
  private navigationOptions: ReplaySubject<MenuOption[]> = new ReplaySubject();
  navigationOptions$ = this.navigationOptions.asObservable();
  /**
   * Determinates if sidenav is opened or not
   */
  private opened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public opened$ = this.opened.asObservable();
  /**
   * Determinates the navbar method to display
   */
  private _mode: BehaviorSubject<'side' | 'over'> = new BehaviorSubject<'side' | 'over'>('side');
  public mode$ = this._mode.asObservable();
  /**
   *
   * @param dataService Inject DataService to get statis json
   */
  constructor(
    private dataService: DataService
  ) {
    this.initMenuOpts();
  }

  /**
   * Toggle sidenav visibility
   */
  toggleSideNav() {
    const val = this.opened.getValue();
    if (this._mode.getValue() === 'over') {
      this.opened.next(!val);
    } else {
      this.opened.next(true);
    }
  }

  /**
   * Open sidenav
   */
  open() {
    this.opened.next(true);
  }

  /**
   * Close sidenav
   */
  close() {
    this.opened.next(false);
  }

  /**
   * Set sidenav mode recibed by param
   * @param mode Mode to set sidenav
   */
  setMode(mode: 'side' | 'over') {
    this._mode.next(mode);
  }

  /**
   * Initialize the menu options
   */
  private initMenuOpts() {
    this.dataService.get('menu').subscribe(data => {
      this.navigationOptions.next(data);
    });
  }

}
