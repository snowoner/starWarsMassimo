import { LoaderService } from 'src/app/services/loader/loader.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceMock extends LoaderService {
  public isLoading = of(false) as any;
}
