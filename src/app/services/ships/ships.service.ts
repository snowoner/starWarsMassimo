import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * get starShips page from "Swapi.dev"
   * @param page api page
   */
  getShips(page?: number): Observable<any> {
    console.log('What page i get ', page);
    let apiUrl = `https://swapi.dev/api/starships/?page=${page ? page : 1}`;
    console.log('url', apiUrl);
    return this.httpClient.get(apiUrl);
  }
}
