import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ShipsService } from '../../services/ships/ships.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { appAnimations } from 'src/app/core/animations/animations';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { Pagination } from '../../core/models/pagination';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
  animations: appAnimations
})
export class ShipsComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();

  ships: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ships$ = this.ships.asObservable();

  pagination: Pagination;

  imageUrl = 'https://starwars-visualguide.com/assets/img/starships/';

  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.getShips();
    this.pagination = {page: 0, pageSize: 10};
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getShips(page?: number): void {
    this.shipsService.getShips(page ? page : 1).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      const ships = [];
      data.results.forEach((ship: any) => {
        ship.imageUrl =
          `${this.imageUrl}${ship.url.split('/')[ship.url.split('/').length - 2]}.jpg`;
        ships.push(ship);
      });
      this.ships.next(ships);
      this.pagination.total = data.count;
    });
  }

  /**
   *
   * @param event information about pagination
   */
  changePage(event: PageEvent): void {
    this.pagination = { page: event.pageIndex, pageSize: event.pageSize };
    this.getShips(this.pagination.page + 1);
  }
}
