import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShipsService } from '../../services/ships/ships.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { appAnimations } from 'src/app/core/animations/animations';
import { PageEvent } from '@angular/material/paginator';
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

  pagination: Pagination = { page: 1};
  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.shipsService.getShips().pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      const ships = [];
      console.log('Data aviable', data);
    });
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  /**
   *
   * @param event information about pagination
   */
  changePage(event: PageEvent): void {
    console.log('Pagination', event);
    this.pagination = { page: event.pageIndex };
    this.shipsService.getShips(this.pagination.page);
  }
}
