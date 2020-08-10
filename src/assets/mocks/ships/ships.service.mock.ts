import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export const SHIPS = {
    count: 1,
    next: 'http://swapi.dev/api/starships/?page=2',
    previous: null,
    results: [
        {
            name: 'CR90 corvette',
            model: 'CR90 corvette',
            max_atmosphering_speed: '950',
            passengers: '600',
            cargo_capacity: '3000000',
            starship_class: 'corvette',
            url: 'http://swapi.dev/api/starships/2/'
        }
    ]
};
@Injectable()
export class ShipsServiceMock {

    getShips(page?: number): Observable<any> {
        return of(SHIPS);
    }
}