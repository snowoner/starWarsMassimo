import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutDashboardService {

  /**
   * Calculate if the screen width is mobile
   * @param width screen width in pixels
   */
  viewModeIsMobile(width: number): boolean {
    if (width <= 425) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Indicates whether or not to display the button to return to the top of the page
   * @param pageYOffset
   * @param document
   */
  showGoUpButton(pageYOffset: number, document: any): boolean {
    if ((pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > 400) {
      return true;
    } else {
      return false;
    }
  }
}
