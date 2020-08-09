import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { DATA_SERVICE_PAGINATED, DATA_SERVICE } from './data-service.mock';
import { DataService } from 'src/app/services/data-service/data-service.service';


const paginated = [];
@Injectable()
export class DataServiceMock extends DataService {
  get(endpoint) {
    if (paginated.indexOf(endpoint) !== -1) {
      return of(DATA_SERVICE_PAGINATED);
    } else {
      return of(DATA_SERVICE);
    }
  }
}
